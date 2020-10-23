import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAnzOGhK1ij2R9iPbk1iZ-Z7llcy1277Q0",
    authDomain: "twitter-clone-9f13d.firebaseapp.com",
    databaseURL: "https://twitter-clone-9f13d.firebaseio.com",
    projectId: "twitter-clone-9f13d",
    storageBucket: "twitter-clone-9f13d.appspot.com",
    messagingSenderId: "1067557511969",
    appId: "1:1067557511969:web:facf26b18a30ae0a17d460"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;