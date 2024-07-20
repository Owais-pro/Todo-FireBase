
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDwmX2GNVU6H-DIGczLITEJdnDR8T5cS2g",
    authDomain: "first-project-6fb37.firebaseapp.com",
    projectId: "first-project-6fb37",
    storageBucket: "first-project-6fb37.appspot.com",
    messagingSenderId: "238721685468",
    appId: "1:238721685468:web:e2909bdcd35a328de3a119"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export{
    app,
    db,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc
  }
  
