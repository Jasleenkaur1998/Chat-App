import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC87RyRw-1bd99i0ntoxi5k670FhwdMkGo",
  authDomain: "chat-app-d4442.firebaseapp.com",
  projectId: "chat-app-d4442",
  storageBucket: "chat-app-d4442.appspot.com",
  messagingSenderId: "497810825101",
  appId: "1:497810825101:web:6476f684d9b82f02c067c4",
  measurementId: "G-1YNDMB4GTW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();