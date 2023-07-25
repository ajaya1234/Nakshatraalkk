


import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDpvg_yU_5Vy50xhmazhQttRzJrmiNoHXw",
  authDomain: "nakshtratalk-c3e11.firebaseapp.com",
  databaseURL: "https://nakshtratalk-c3e11-default-rtdb.firebaseio.com",
  projectId: "nakshtratalk-c3e11",
  storageBucket: "nakshtratalk-c3e11.appspot.com",
  messagingSenderId: "564770298148",
  appId: "1:564770298148:web:06f1049cabdfa628eabbb1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export default firebase;


