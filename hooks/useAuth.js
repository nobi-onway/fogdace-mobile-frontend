import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { FIREBASE_AUTH } from "../config/firebase";
import useNavigation from "./useNavigation";

function useAuth() {
    const { go_to_sign_in, go_to_feed } = useNavigation()

    const sign_in_with_email = async (email, password) => {
        signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
            .then(userCredential => { go_to_feed() })
            .catch(err => { alert('login fail') })
    }

    const sign_up_with_email = async (email, password) => {
        createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
            .then(userCredential => { go_to_sign_in() })
            .catch(() => { alert('sign up fail') })
    }
    return { sign_in_with_email, sign_up_with_email };
}

export default useAuth;