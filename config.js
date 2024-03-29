import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyCUw7o6TEhBZVlXyxWzyIbAdvjnm13WTOI',
	authDomain: 'storytellingapp-52386.firebaseapp.com',
	projectId: 'storytellingapp-52386',
	storageBucket: 'storytellingapp-52386.appspot.com',
	messagingSenderId: '169067545995',
	appId: '1:169067545995:web:55571d03a9f684bee79b8e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
