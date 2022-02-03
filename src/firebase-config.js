import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC79-xZfBCErxeZwzDCxPDFYKhWnrSD22Q",
  authDomain: "gdscwebsite-c3449.firebaseapp.com",
  projectId: "gdscwebsite-c3449",
  storageBucket: "gdscwebsite-c3449.appspot.com",
  messagingSenderId: "111698852663",
  appId: "1:111698852663:web:6ec58b0196b5a0025578b2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
