import firebase from 'firebase/app'
const config = require('./config.firebase.json')
export const firebaseInit = () => {
  firebase.initializeApp(config)
}
