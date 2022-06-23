import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy_QsrGAv6-t3qWfdwJfK2cLVOeexqmcY",
  authDomain: "note-maker-5806b.firebaseapp.com",
  projectId: "note-maker-5806b",
  storageBucket: "note-maker-5806b.appspot.com",
  messagingSenderId: "376846550663",
  appId: "1:376846550663:web:a086227ead2bdb36a41a22"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db } 
