import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsV4vvhpgoVbcp9eCQ2VqQjw0xT4oHsio",
  authDomain: "teach2give-auth.firebaseapp.com",
  projectId: "teach2give-auth",
  storageBucket: "teach2give-auth.appspot.com",
  messagingSenderId: "810461340269",
  appId: "1:810461340269:web:db44680a9cf24d90cb9564",
  measurementId: "G-RELESCL3Q5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };
// const analytics = getAnalytics(app);
