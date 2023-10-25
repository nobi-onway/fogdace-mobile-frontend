// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyD22usYxozolyDGVCoILxXD8Ppmla6vP-A",
    authDomain: "fogdace-a5b46.firebaseapp.com",
    projectId: "fogdace-a5b46",
    storageBucket: "fogdace-a5b46.appspot.com",
    messagingSenderId: "282005109574",
    appId: "1:282005109574:web:489d37fdf0b5fed0b30347",
    measurementId: "G-VP0BC2CM30"
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const INITIALIZE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)