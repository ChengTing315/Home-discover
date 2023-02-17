import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6GTYEm_BLrhoYge6AoI2UnYuk03cKg1I",
  authDomain: "home-discover-4d577.firebaseapp.com",
  databaseURL:
    "https://home-discover-4d577-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "home-discover-4d577",
  storageBucket: "home-discover-4d577.appspot.com",
  messagingSenderId: "518770492855",
  appId: "1:518770492855:web:2fa05e9b17479bea2ad432",
  measurementId: "G-06S0521KPZ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

export const db = getFirestore(app);
