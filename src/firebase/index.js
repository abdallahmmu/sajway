

import { initializeApp} from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"


const firebaseConfig = {

  apiKey: "AIzaSyC0UCYhbWEfiqsP2QDFwh27cwrMY3VVtjE",

  authDomain: "sajway-ed715.firebaseapp.com",

  projectId: "sajway-ed715",

  storageBucket: "sajway-ed715.appspot.com",

  messagingSenderId: "138546471361",

  appId: "1:138546471361:web:0d85a8de0f625b9b1f8f40"

};


// Initialize Firebase

initializeApp(firebaseConfig);

// init FireStore

const db = getFirestore()
const mealsCollection = collection(db, 'Meals')
const ordersCollection = collection(db, 'orders')

export {
    db,
    mealsCollection,
    ordersCollection
}