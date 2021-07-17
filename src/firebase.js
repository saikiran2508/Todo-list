  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMvvrlw21CrUuH_kfnSLLLWRUW1l3OZI0",
    authDomain: "todo-app-ap-83766.firebaseapp.com",
    projectId: "todo-app-ap-83766",
    storageBucket: "todo-app-ap-83766.appspot.com",
    messagingSenderId: "225396051895",
    appId: "1:225396051895:web:78e8c0043665f2e9ffa232",
    measurementId: "G-95XDELFRNG"
  });

  const db = firebaseApp.firestore();

  export default db;