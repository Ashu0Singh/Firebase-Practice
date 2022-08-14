import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA7Jlszk0PZo9frndCMoZ_bVi-M2TpMnzk",
  authDomain: "fir-practice-b0ee9.firebaseapp.com",
  projectId: "fir-practice-b0ee9",
  storageBucket: "fir-practice-b0ee9.appspot.com",
  messagingSenderId: "808451646108",
  appId: "1:808451646108:web:1665adaf58484dd20dc359",
  measurementId: "G-H5GW9X6YP0"
};

class Firebase{
  constructor(){
    initializeApp(firebaseConfig);
    this.auth = getAuth();
  }
  createUser = (email,password) => {
    this.auth.createUserWithEmailAndPassword(email,password);
  }
  signInUser = (email,password) => {
    this.auth.signInUserWithEmailAndPassword(email,password);
  }
  doSignOut = () => this.auth.signOut();
  resetPass = email => this.auth.sendPasswordResetEmail();
  doPassUpadte = password => this.auth.currentUser.updatePassword(password);

}

console.log(Firebase);
//const analytics = getAnalytics(Firebase);



export default Firebase;