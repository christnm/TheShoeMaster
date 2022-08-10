import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth"


const firebaseconfig = {
    apiKey: "AIzaSyBfEUgwisINDIKPT8p8Y30V1MBxrJo1FJQ",
    authDomain: "theshoemaster615-65248.firebaseapp.com",
    projectId: "theshoemaster615-65248",
    storageBucket: "theshoemaster615-65248.appspot.com",
    messagingSenderId: "410293619119",
    appId: "1:410293619119:web:b67c8a74328311f40ac75a",
    measurementId: "G-0YX76H2WHM"
  };

const app = initializeApp(firebaseconfig)

const analytics = getAnalytics(app);
export const db = getFirestore()


export const auth = getAuth(app)