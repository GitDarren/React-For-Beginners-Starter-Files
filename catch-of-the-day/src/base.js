import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBrxnRBwG4EV1uQaiJDZ3_V2Vl8FI_WEu0",
  authDomain: "catch-of-the-day-darren.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-darren.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is a default export
export default base;
