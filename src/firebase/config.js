import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBIKJqbWDyB-fsSoJJkHYnMjWPQLHQPzxo",
	authDomain: "miniblog-656f1.firebaseapp.com",
	projectId: "miniblog-656f1",
	storageBucket: "miniblog-656f1.appspot.com",
	messagingSenderId: "348948221030",
	appId: "1:348948221030:web:0b229b5c41501053def1a7",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
