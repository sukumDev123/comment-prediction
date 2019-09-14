import firebase from 'firebase/app'

export const firebaseInit = () => {
  const config = {}
  firebase.initializeApp(config)
}
