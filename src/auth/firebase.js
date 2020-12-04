import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDxWxrmdV3VByo4Q9HOQzAgReQIrZ_HOj4",
  authDomain: "mdrive-18e64.firebaseapp.com",
  projectId: "mdrive-18e64",
  storageBucket: "mdrive-18e64.appspot.com",
  messagingSenderId: "508216413508",
  appId: "1:508216413508:web:9c0e0d7194b48192511b11",
  measurementId: "G-0BQX3YGMXX",
};

export default firebase.initializeApp(firebaseConfig);
firebase.analytics();
