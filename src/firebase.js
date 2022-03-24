import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBr_qJTe-9_TZhGM2Dhwh_NmGrKArMaR-k",
    authDomain: "nest-zenly.firebaseapp.com",
    projectId: "nest-zenly",
    storageBucket: "nest-zenly.appspot.com",
    messagingSenderId: "184906635809",
    appId: "1:184906635809:web:2215f5f99e9206693d6160",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
