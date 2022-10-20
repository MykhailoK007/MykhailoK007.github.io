import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

import app from '../firebase.config'

const auth = getAuth(app)

export const signUp = ({ email, password }) => {
  createUserWithEmailAndPassword(auth, 'ggm@ggm.com', '123456')
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user
      console.log(user, 'user Data')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log({ errorCode, errorMessage }, 'error')
    })
}

export const signIn = ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log(user, 'signed in')
    // ...
    })
}
