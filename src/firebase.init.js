// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW1xLTicSgJVbNuCxGd1NTXqqsftLLYKg",
  authDomain: "ema-john-simple-ad35b.firebaseapp.com",
  projectId: "ema-john-simple-ad35b",
  storageBucket: "ema-john-simple-ad35b.appspot.com",
  messagingSenderId: "852283294835",
  appId: "1:852283294835:web:b13fa402eecb9d6b07d606",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
