import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1sNHKBy4bNpgEg5mBkqcJKm4GKwC7ZlU",
  authDomain: "auth-react-3ed59.firebaseapp.com",
  projectId: "auth-react-3ed59",
  storageBucket: "auth-react-3ed59.appspot.com",
  messagingSenderId: "277453486980",
  appId: "1:277453486980:web:477cdb014d6467af58bbd1",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
