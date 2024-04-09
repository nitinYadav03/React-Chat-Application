import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFp8o2hkHwWhaLEaRSCrVk2NNR9EB8R04",
  authDomain: "react-chat-application-b36d1.firebaseapp.com",
  projectId: "react-chat-application-b36d1",
  storageBucket: "react-chat-application-b36d1.appspot.com",
  messagingSenderId: "759994354473",
  appId: "1:759994354473:web:dcf28e7b58804fff60c538"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();