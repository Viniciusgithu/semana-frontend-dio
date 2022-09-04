
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBSY_CIhVR6cKpd2dArIOxfVtMUxRqZYDo",
    authDomain: "projeto-semana-frontend-dio.firebaseapp.com",
    projectId: "projeto-semana-frontend-dio",
    storageBucket: "projeto-semana-frontend-dio.appspot.com",
    messagingSenderId: "941769201086",
    appId: "1:941769201086:web:c73efee817c5dbb33515ef"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app