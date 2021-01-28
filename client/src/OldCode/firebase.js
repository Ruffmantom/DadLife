import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDCXToZYtuab3oYdbxyDJsmny-QmIQGdy0",
    authDomain: "dadlife-2d380.firebaseapp.com",
    databaseURL: "https://dadlife-2d380.firebaseio.com",
    projectId: "dadlife-2d380",
    storageBucket: "dadlife-2d380.appspot.com",
    messagingSenderId: "852418116809",
    appId: "1:852418116809:web:b3875b7dec9a9322a8e118",
    measurementId: "G-VBMS17V45N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();