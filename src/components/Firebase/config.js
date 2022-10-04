

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAWaMLtZDSGJ_R1ppA_pWdCShGxThXRuHE",
  authDomain: "react-street.firebaseapp.com",
  projectId: "react-street",
  storageBucket: "react-street.appspot.com",
  messagingSenderId: "629036311914",
  appId: "1:629036311914:web:0dafba0c3d892503023113"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)