import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, getAuth } from "@firebase/auth";
import { FIREBASE_AUTH } from "../config/firebase";
import useNavigation from "./useNavigation";
import { userStore } from "../stores/userStore";
import { FIREBASE_DATABASE } from "../config/firebase";
import { set, ref } from "@firebase/database";
import useFetch from "./useFetch";
import { BASE_URL } from "../constants/url";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_URL = `${BASE_URL}/auth`
const REGISTER_URL = `${AUTH_URL}/register`
const LOGIN_URL = `${AUTH_URL}/login`

function useAuth() {
    const { go_to_sign_in, go_to_feed } = useNavigation()
    const { post_fetcher } = useFetch()
    const { setAuthentication, setUserInfo } = userStore();

    const subscribe_auth_state_changed = () => {
        return onAuthStateChanged(FIREBASE_AUTH, async authenticateUser => {
            if (!authenticateUser) {
                setAuthentication(null)
                return
            }
            const { uid } = authenticateUser;
            const { refreshToken, accessToken } = authenticateUser.stsTokenManager
            setAuthentication({ uid, refreshToken, accessToken })
        })
    }

    const sign_in_with_email = async (email, password) => {
        await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
            .then(userCredential => {
                sign_in_with_app(email, password);
                go_to_feed()
            })
            .catch(err => { alert('login fail: ' + err) })
    }

    const sign_up_with_email = async (email, password) => {
        await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
            .then(userCredential => {

            })
            .catch(() => { alert('email not found') })
    }

    const sign_in_with_app = async (username, password) => {
        post_fetcher(LOGIN_URL, {
            username: username,
            password: password
        }).then(user => {
            setUserInfo(user)
        })
    }

    const sign_up_with_app = async (user_info) => {
        const { email, password, confirmPassword, name, avatar } = user_info;

        await post_fetcher(REGISTER_URL, {
            username: email,
            password: password,
            confirmPassword: confirmPassword,
            name: name,
            avatar: avatar,
        }).then(_id => {
            set(ref(FIREBASE_DATABASE, 'users/' + _id), { _id, email, name, avatar })
                .then(() => go_to_sign_in())
                .catch(err => alert(err.message))
        }).catch(err => alert(err.message))
    }

    const sign_out = () => {
        const auth = getAuth()
        signOut(auth).then(async() => {
            setAuthentication(null)
            console.log('sign_out...');
            await AsyncStorage.clear()
          }).catch((error) => {
            alert('toan cho dien')
          });
    }


    return { sign_up_with_app, sign_in_with_email, sign_up_with_email, sign_out, subscribe_auth_state_changed };
}

export default useAuth;