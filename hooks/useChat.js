import { userStore } from "../stores/userStore";
import { get, onValue, ref, set, update, child, push } from "@firebase/database";
import { FIREBASE_DATABASE } from "../config/firebase";
import { uuidv4 } from "@firebase/util";
import moment from "moment/moment";

function useChat() {
    const { authentication } = userStore()

    const { uid: cur_user_id } = authentication;

    const create_room_chat_with = (user) => {
        const room_id = uuidv4();

        update(
            ref(
                FIREBASE_DATABASE,
                "chat_list/" + user.uid + "/" + cur_user_id
            ),
            {
                room_id: room_id,
                with_user: cur_user_id,
                last_message: {
                    message: ""
                },
            }
        );

        update(
            ref(
                FIREBASE_DATABASE,
                "chat_list/" + cur_user_id + "/" + user.uid
            ),
            {
                room_id: room_id,
                with_user: user.uid,
                last_message: {
                    message: ""
                },
            }
        );
    }

    const get_chat_list = (callback) => {
        const chat_list_ref = ref(
            FIREBASE_DATABASE,
            "chat_list/" + cur_user_id
        );

        onValue(chat_list_ref, (snapshot) => {
            const users = Object.values(snapshot.val());

            callback(users);
        });
    }

    const send_text_message_to = async (room_id, user_id, message) => {
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
            type: "text",
        };

        const updates = {};

        updates["/messages/" + room_id + "/" + new_message_key] = message_data;

        return update(ref(FIREBASE_DATABASE), updates).then(() => {
            const chat_list_update = {
                last_message: message_data,
            };

            update(
                ref(
                    FIREBASE_DATABASE,
                    "chat_list/" + cur_user_id + "/" + user_id
                ),
                chat_list_update
            );
        });
    };

    return { create_room_chat_with, get_chat_list, send_text_message_to };
}

export default useChat;