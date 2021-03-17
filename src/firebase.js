import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: 'AIzaSyAWp2Fl7PnqjQoEkfIOpyYk4mFByedYuh8',
    authDomain: 'full-spinnaker-management.firebaseapp.com',
    databaseURL: 'https://full-spinnaker-management-default-rtdb.firebaseio.com',
    projectId: 'full-spinnaker-management',
    storageBucket: 'full-spinnaker-management.appspot.com',
    messagingSenderId: '692228222773',
    appId: '1:692228222773:web:1bd90cc5c0e706c9b2a67c',
    measurementId: 'G-E0G5TJGVQ8',
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
// const usersCollection = db.collection('users')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
//   usersCollection,
//   postsCollection,
//   commentsCollection,
//   likesCollection
}
