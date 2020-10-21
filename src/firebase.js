import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB0xLiwagSgzBuou_IXC1HR3hrVBWf1xrc",
  authDomain: "facebook-messenger-clone-20c27.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-20c27.firebaseio.com",
  projectId: "facebook-messenger-clone-20c27",
  storageBucket: "facebook-messenger-clone-20c27.appspot.com",
  messagingSenderId: "336160898797",
  appId: "1:336160898797:web:e604d22785a1df21a296e4",
  measurementId: "G-WF4THGXDTZ",
});

const db = firebaseApp.firestore();

export default db;
