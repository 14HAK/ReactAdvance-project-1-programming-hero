//firebase-2023 [project1] থেকে এই SDK.

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzgaSyDIMg99ZF01d14fKgZq6HoZJtDjiA4ZzYwNls8',
  authDomain: 'fibasse-2023.firebaseapp.com',
  projectId: 'fibasse-2023',
  storageBucket: 'fibasse-2023.appspot.com',
  messagingSenderId: '138216328617',
  appId: '1:1382112586328617:web:e2bf2ebb949gt55152be9548b8',
  measurementId: 'G-T5CGQ5QWEMY0N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

// this SDK is expirat please set new firebase SDK
