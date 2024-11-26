import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: await import.meta.env.VITE_API_KEY,
  authDomain: await import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: await import.meta.env.VITE_DATABASE_URL,
  projectId: await import.meta.env.VITE_PROJECT_ID,
  storageBucket: await import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: await import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: await import.meta.env.VITE_APP_ID,
  measurementId: await import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
