//import firebase from "firebase"; wont work use "import * as"
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCW3FNmLkFVles3pYlXIPdHO1cS9DlaJAI",
  authDomain: "photowall-9644f.firebaseapp.com",
  databaseURL: "https://photowall-9644f.firebaseio.com",
  projectId: "photowall-9644f",
  storageBucket: "photowall-9644f.appspot.com",
  messagingSenderId: "432485929101"
};
firebase.initializeApp(config);

const database = firebase.database();

export {database};