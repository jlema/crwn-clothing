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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
