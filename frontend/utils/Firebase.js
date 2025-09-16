import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "lsm-pro-834d4.firebaseapp.com",
  projectId: "lsm-pro-834d4",
  storageBucket: "lsm-pro-834d4.firebasestorage.app",
  messagingSenderId: "9015108591",
  appId: "1:9015108591:web:b27f01d9773d11f6b68c1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}