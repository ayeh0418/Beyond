import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAb3P38rCRXJ4XoRvcqnNJ4yKp_9f6UxVY',
    authDomain: 'beyond-money-8f943.firebaseapp.com',
    databaseURL: 'https://beyond-money-8f943-default-rtdb.firebaseio.com/',
    projectId: 'beyond-money-8f943',
    storageBucket: 'beyond-money-8f943.appspot.com',
    messagingSenderId: '733171260866',
    appId: '1:733171260866:ios:427fc3e123bb5a52688a5b',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };