import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA393LTyB0BztQYhpNLSsHZ9jSo7FqQ1Mk",
    authDomain: "simplecrudreact-2a7a3.firebaseapp.com",
    databaseURL: "https://simplecrudreact-2a7a3.firebaseio.com",
    projectId: "simplecrudreact-2a7a3",
    storageBucket: "simplecrudreact-2a7a3.appspot.com",
    messagingSenderId: "227065484825",
    appId: "1:227065484825:web:602acb898141a13c"
  };
  
 export const fire = firebase.initializeApp(config);
  
export const db = fire.database()
  
export const permintaanRef = db.ref('notification')
export const DonorRef = db.ref('post')
export const profileRef = db.ref('profile')

export const functions = fire.functions();
export const auth = fire.auth();
