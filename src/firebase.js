// src/firebase.js
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCioEpgDQrupWDedJ1wbHU4z3BoYK_PtHA",

  authDomain: "bakers-math.firebaseapp.com",

  databaseURL: "https://bakers-math-default-rtdb.firebaseio.com",

  projectId: "bakers-math",

  storageBucket: "bakers-math.appspot.com",

  messagingSenderId: "200226272848",

  appId: "1:200226272848:web:245b27610e289adccc0355",

  measurementId: "${config.measurementId}"

};
firebase.initializeApp(config);
export default firebase;
