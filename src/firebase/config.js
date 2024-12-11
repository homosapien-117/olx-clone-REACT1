import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlRWhe2_Bb9vvbvTJct_HFPQMBNFpdZEQ",
  authDomain: "fir-a68b8.firebaseapp.com",
  projectId: "fir-a68b8",
  storageBucket: "fir-a68b8.appspot.com",
  messagingSenderId: "483691926605",
  appId: "1:483691926605:web:f3a62d92fca65b8a42b804",
  measurementId: "G-SN74SDLZ9C"
};

  const firebase= initializeApp(firebaseConfig);
export { firebase };