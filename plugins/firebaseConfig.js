import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyA9ilV00j3kKI3KoUf2h6CWq9-_Xm6WZWQ',
    authDomain: 'csmju-e07f8.firebaseapp.com',
    databaseURL: 'https://csmju-e07f8.firebaseio.com',
    projectId: 'csmju-e07f8',
    storageBucket: 'csmju-e07f8.appspot.com',
    messagingSenderId: '1079284260519',
    appId: '1:1079284260519:web:9fa433417f7c5f577bc582',
    measurementId: 'G-61JPHVGRZ9',
  }
  firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()
