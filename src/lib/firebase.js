import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDM5D7mYMHNHnRWkzLkO1v-Kl_i6JVpeEM",
  authDomain: "rebeldot-7a26b.firebaseapp.com",
  databaseURL: "https://rebeldot-7a26b-default-rtdb.firebaseio.com",
  projectId: "rebeldot-7a26b",
  storageBucket: "rebeldot-7a26b.appspot.com",
  messagingSenderId: "94179945908",
  appId: "1:94179945908:web:2bd8a40e3494476511d6e1",
  measurementId: "G-SSHYKGCS70",
};

console.log("firebaseConfig", firebaseConfig);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
