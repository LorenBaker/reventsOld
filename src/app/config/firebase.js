import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM0lHPt8rxTMfGNNXzr1NGK7FCLzihB3w",
  authDomain: "revents-225615.firebaseapp.com",
  databaseURL: "https://revents-225615.firebaseio.com",
  projectId: "revents-225615",
  storageBucket: "revents-225615.appspot.com",
  messagingSenderId: "513414628524"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
