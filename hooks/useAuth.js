import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { FIREBASE_AUTH } from "../config/firebase";
import useNavigation from "./useNavigation";
import { userStore } from "../stores/userStore";
import { FIREBASE_DATABASE } from "../config/firebase";
import { set, ref } from "@firebase/database";

function useAuth() {
    const { go_to_sign_in, go_to_feed } = useNavigation()
    const { setAuthentication } = userStore();

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
            .then(userCredential => { go_to_feed() })
            .catch(err => { alert('login fail: ' + err) })
    }

    const sign_up_with_email = async (email, password) => {
        await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
            .then(userCredential => {
                const { user } = userCredential;
                const { uid, email } = user;

                set(ref(FIREBASE_DATABASE, 'users/' + uid), { uid, email })
                    .then(() => go_to_sign_in())
            })
            .catch(() => { alert('sign up fail') })
    }

    const sign_out = () => {
        signOut();
    }
    return { sign_in_with_email, sign_up_with_email, sign_out, subscribe_auth_state_changed };
}

export default useAuth;