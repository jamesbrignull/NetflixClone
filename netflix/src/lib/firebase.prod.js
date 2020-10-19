import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDdrSZKX1s56_xvhM0tUEw6A1Z2fF6Z5pc",
    authDomain: "netflix-clone-dd090.firebaseapp.com",
    databaseURL: "https://netflix-clone-dd090.firebaseio.com",
    projectId: "netflix-clone-dd090",
    storageBucket: "netflix-clone-dd090.appspot.com",
    messagingSenderId: "61047379010",
    appId: "1:61047379010:web:d71d9404dd4338762b89db"
};

const firebase = Firebase.initializeApp(config);

export { firebase };
