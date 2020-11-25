import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: 'AIzaSyCz_FdGk38je5WAjD9B_2LXQfWP9UiGV6o',
    authDomain: "gadd-edf65.firebaseapp.com",
    databaseURL: "https://gadd-edf65.firebaseio.com",
    projectId: "gadd-edf65",
    storageBucket: "gadd-edf65.appspot.com",
    messagingSenderId: "341504063552",
    appId: "1:341504063552:web:b146a30b324709cf3fc7a5"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore().collection('gadd');

export function updateDB(array: any, uid:any){
    return db.doc(uid).set({array});
}

export function loginWithGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider).then((snap:any) => snap.user);
}

export function signOutGoogle(){
    firebase.auth().signOut();
}