// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGJXtYqI8y0-AT91_u3ryZJgk_L1DLH3A",
  authDomain: "fabian-morales-iliana-orellana.firebaseapp.com",
  databaseURL: "https://fabian-morales-iliana-orellana-default-rtdb.firebaseio.com",
  projectId: "fabian-morales-iliana-orellana",
  storageBucket: "fabian-morales-iliana-orellana.appspot.com",
  messagingSenderId: "833034282180",
  appId: "1:833034282180:web:06996c91f54c37438bd591",
  measurementId: "G-0SKJ4K476B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

type="text/javascript">
    function applyStyle(style) {
      var buttons = document.getElementsByClassName('menu')[0].getElementsByTagName('button');
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].className = style;
      }
      document.body.className = style;
    }