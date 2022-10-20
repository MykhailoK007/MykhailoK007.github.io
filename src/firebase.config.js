import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCGFgZz-kZRbJksMs6uu42rNMgN5oCh5n0',
  authDomain: 'finance-family-67df7.firebaseapp.com',
  projectId: 'finance-family-67df7',
  storageBucket: 'finance-family-67df7.appspot.com',
  messagingSenderId: '76491427797',
  appId: '1:76491427797:web:8d7b29fd4ce635ab9c775c'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app
