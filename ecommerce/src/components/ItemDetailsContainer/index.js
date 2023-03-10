import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: "project-837847523714.firebaseapp.com",
  projectId: "project-837847523714",
  storageBucket: "project-837847523714.appspot.com",
  messagingSenderId: "702155068829",
  appId: process.env.REACT_APP_FIRESTORE_APP_ID,
  measurementId: "G-T3872E6GHM"
};

initializeApp(firebaseConfig);

console.log(process.env.REACT_APP_FIRESTORE_API_KEY)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
