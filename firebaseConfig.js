// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7NL-a8SJailOTVCEreUL0ldlvXoyFh4s",
    authDomain: "app-iot-react-native.firebaseapp.com",
    projectId: "app-iot-react-native",
    storageBucket: "app-iot-react-native.appspot.com",
    messagingSenderId: "191814417974",
    appId: "1:191814417974:web:b1ff2ed40207bfa6f1a297"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
