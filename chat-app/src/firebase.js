import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDQRw6H1m0jqlWibmiBhJ5ZhZEHcAAA-bk",
  authDomain: "chat-d4dfc.firebaseapp.com",
  projectId: "chat-d4dfc",
  storageBucket: "chat-d4dfc.appspot.com",
  messagingSenderId: "276049640324",
  appId: "1:276049640324:web:a00a08a828cdc27819bbd1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
