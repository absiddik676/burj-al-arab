// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo9-iBnnNQvVcp_jHpUeayBpOo2UrCQSc",
  authDomain: "burj-al-arab-81efd.firebaseapp.com",
  projectId: "burj-al-arab-81efd",
  storageBucket: "burj-al-arab-81efd.appspot.com",
  messagingSenderId: "659111882838",
  appId: "1:659111882838:web:68894a228fd74fbe938bf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app