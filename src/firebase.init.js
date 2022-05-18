import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEjPIKZv_Op0xmG7-Wcu_LNRFfiGvaMR0",
    authDomain: "to-do-app-f20f4.firebaseapp.com",
    projectId: "to-do-app-f20f4",
    storageBucket: "to-do-app-f20f4.appspot.com",
    messagingSenderId: "274832358042",
    appId: "1:274832358042:web:b50067e387834d6f283d23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;