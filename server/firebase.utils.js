
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyC2HDVVL6N6_m12pQUi1Oop-mA7TGtZgjc',
  authDomain: 'portfolio-1-d1e7c.firebaseapp.com',
  databaseURL: 'https://portfolio-1-d1e7c.firebaseio.com',
  projectId: 'portfolio-1-d1e7c',
  storageBucket: 'portfolio-1-d1e7c.appspot.com',
  messagingSenderId: '42976614571',
  appId: '1:42976614571:web:f5586ba3489ab07e0a7fee',
  measurementId: 'G-C47JSL1EYP'
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()
const githubProvider = new firebase.auth.GithubAuthProvider()

googleProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
export const signInWithGitHub = () => auth.signInWithPopup(githubProvider)
  .then(function (result) {
  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = result.credential.accessToken
    // The signed-in user info.
    var user = result.user
  // ...
  }).catch(function (error) {
  // Handle Errors here.
    var errorCode = error.code
    var errorMessage = error.message
    // The email of the user's account used.
    var email = error.email
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential
  // ...
  })

export default firebase
