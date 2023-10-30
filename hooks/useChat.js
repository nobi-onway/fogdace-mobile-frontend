import { userStore } from "../stores/userStore";
import { get, onValue, ref, set, update, child, push } from "@firebase/database";
import { FIREBASE_DATABASE } from "../config/firebase";
import { uuidv4 } from "@firebase/util";
import moment from "moment/moment";

const USER_REF = ref(FIREBASE_DATABASE, "users/");
const CHAT_LIST_REF = (from, to) => ref(FIREBASE_DATABASE, "chat_list/" + from + "/" + to);
const MESSAGES_IN_ROOM_REF = (room_id) => ref(FIREBASE_DATABASE, "messages/" + room_id);

function useChat() {
    const { info } = userStore()

    const { _id: cur_user_id } = info;

    const get_all_users = (callback) => {
        onValue(
            USER_REF,
            (snapshot) => {
                const data = Object.values(snapshot.val());
                callback(data);
            },
            { onlyOnce: true }
        );
    }

    const create_room_chat_with = async (user) => {
        const room_id = uuidv4();

        const room_data = (with_user) => ({
            room_id: room_id,
            with_user: with_user,
            last_message: { message: "" }
        })

        await update(
            CHAT_LIST_REF(user._id, cur_user_id),
            room_data(info)
        );

        await update(
            CHAT_LIST_REF(cur_user_id, user._id),
            room_data(user)
        );

        return room_id;
    }

    const get_chat_list = (callback) => {
        onValue(CHAT_LIST_REF(cur_user_id, ""), (snapshot) => {
            const users = Object.values(snapshot.val());

            callback(users);
        });
    }

    const listen_messages_in_room = (room_id, callback) => {
        const group_by_user = (list) => {
            const result = [];
            let cur_group = null;

            list.forEach((item) => {
                const { from, send_time, message, type } = item;

                if (!cur_group || cur_group.from !== from) {
                    cur_group = {
                        from: from,
                        messages: [],
                        send_time: send_time,
                    };
                    result.push(cur_group);
                }

                cur_group.messages.push({ message: JSON.stringify(message), type: type });
            });

            return result;
        };

        onValue(MESSAGES_IN_ROOM_REF(room_id), (snapshot) => {
            if (!snapshot.val()) return;
            const data = Object.values(snapshot.val());
            const new_data = group_by_user(data);

            callback(new_data);
        });
    }

    const send_message_to = async (room_id, user_id, message, type = 'text') => {
        const new_message_key = push(
            child(ref(FIREBASE_DATABASE), "messages/" + room_id)
        ).key;

        const message_data = {
            id: new_message_key,
            room_id: room_id,
            message: message,
            from: cur_user_id,
            to: user_id,
            send_time: moment().format(),
            type: type,
        };

        const updates = {};

        updates["/messages/" + room_id + "/" + new_message_key] = message_data;

        return update(ref(FIREBASE_DATABASE), updates).then(() => {
            const chat_list_update = {
                last_message: message_data,
            };

            update(
                CHAT_LIST_REF(cur_user_id, user_id),
                chat_list_update
            );

            update(
                CHAT_LIST_REF(user_id, cur_user_id),
                chat_list_update
            );
        });
    };

    return { create_room_chat_with, get_chat_list, send_message_to, get_all_users, listen_messages_in_room };
}

export default useChat;