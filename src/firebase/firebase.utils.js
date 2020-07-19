import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyATXbjxsqT_qdexGsjsPjzpPAfIfxSldzM',
	authDomain: 'crwn-db-dc5fe.firebaseapp.com',
	databaseURL: 'https://crwn-db-dc5fe.firebaseio.com',
	projectId: 'crwn-db-dc5fe',
	storageBucket: 'crwn-db-dc5fe.appspot.com',
	messagingSenderId: '703273895064',
	appId: '1:703273895064:web:6db6dfff37f2562fcefced',
	measurementId: 'G-FTZKGJ12G3'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
