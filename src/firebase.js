import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({

  
  apiKey: "AIzaSyAJiHVDDOv_zJkyrO56PArBQXL0M5nfhos",
  authDomain: "saylani-online-store.firebaseapp.com",
  projectId: "saylani-online-store",
  storageBucket: "saylani-online-store.appspot.com",
  messagingSenderId: "955492738317",
  appId: "1:955492738317:web:9f2b2db17a98e88bb8bc44"
//  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  
})

export const auth = app.auth()
export default app
