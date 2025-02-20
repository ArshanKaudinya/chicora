import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-p5mxR6vrwTBUJ0XkiI4JcyNDaG_gB6s",
  authDomain: "chicora-c057e.firebaseapp.com",
  projectId: "chicora-c057e",
  storageBucket: "chicora-c057e.firebasestorage.app",
  messagingSenderId: "778418083215",
  appId: "1:778418083215:web:687dacc336cde1fbd7a7fa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, googleProvider, db, storage };