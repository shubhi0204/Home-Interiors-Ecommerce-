import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBuq2POWTo2j2VRJ3AZqYAOzYQdcwUoA6I",
    authDomain: "decor-life-a75db.firebaseapp.com",
    projectId: "decor-life-a75db",
    storageBucket: "decor-life-a75db.appspot.com",
    messagingSenderId: "39145524393",
    appId: "1:39145524393:web:d30d6b266cae911b44adb8"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export {auth,provider,storage};
  export default db;

