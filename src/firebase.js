import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
   //create your own firebaseConfig
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

export const db = getFirestore(app);
