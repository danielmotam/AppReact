import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDbPrhaEEseIief2umo1NtakBLeSJMx30Y",
    authDomain: "appdaniel-170e8.firebaseapp.com",
    databaseURL: "https://appdaniel-170e8-default-rtdb.firebaseio.com",
    projectId: "appdaniel-170e8",
    storageBucket: "appdaniel-170e8.appspot.com",
    messagingSenderId: "547723516554",
    appId: "1:547723516554:web:54be35a9bdc9f116eaab73",
    measurementId: "G-61VJF64TWC"
  };

 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;