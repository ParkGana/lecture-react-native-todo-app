// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC_JbG7CxI82CyN0KK5LLvzMXyKM8vXzqI',
    authDomain: 'lecture-react-native-todo-app.firebaseapp.com',
    projectId: 'lecture-react-native-todo-app',
    storageBucket: 'lecture-react-native-todo-app.appspot.com',
    messagingSenderId: '697538744458',
    appId: '1:697538744458:web:931376d1617e0f5ed89d73'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
