// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
// // import { getAuth } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
// // import { getDatabase } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
// const firebaseConfig = {
//     apiKey: "AIzaSyDjTGwQGE6zaOdXwBbBwmyttJ_iNbVIeRA",
//     authDomain: "finfund-5fad4.firebaseapp.com",
//     projectId: "finfund-5fad4",
//     storageBucket: "finfund-5fad4.appspot.com",
//     messagingSenderId: "619016771348",
//     appId: "1:619016771348:web:283133c90b78ef6c0c9401",
//     measurementId: "G-7QBW0KB6T1"   
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

//   const auth = firebase.auth()
//   const database = firebase.database()

//   function register() {

//     email = document.getElementById('email').value
//     username = document.getElementById('username').value
//     walletaddress = document.getElementById('walletaddress').value
//     password = document.getElementById('password').value

//     if (validate_email(email) == false || validate_password(password) == false) {
//         alert('Email or Password is wrong!')
//         return
//     }

//     auth.createUserWithEmailAndPassword(email, password)
//     .then(function() {
//     // Declare user variable
//     var user = auth.currentUser

//     // Add this user to Firebase Database
//     var database_ref = database.ref()

//     // Create User data
//     var user_data = {
//       email : email,
//       username : username,
//       walletaddress : walletaddress,
//       last_login : Date.now()
//     }

//     // Push to Firebase Database
//     database_ref.child('users/' + user.uid).set(user_data)

//     // DOne
//     alert('User Created!!')
//   })
//   .catch(function(error) {
//     // Firebase will use this to alert of its errors
//     var error_code = error.code
//     var error_message = error.message

//     alert(error_message)
//   })
//   }

//   // register button
// // const registerButton = document.querySelector('.form-button');

// // add event listener to register button
// // 
// registerButton.addEventListener('click', register);

//   function login () {
//   email = document.getElementById('email').value
//   password = document.getElementById('password').value

//   if (validate_email(email) == false || validate_password(password) == false) {
//     alert('Email or Password is Outta Line!!')
//     return
//   }

//   auth.signInWithEmailAndPassword(email, password)
//   .then(function() {
//     var user = auth.currentUser

//     var database_ref = database.ref()

//     var user_data = {
//       last_login : Date.now()
//     }

//     database_ref.child('users/' + user.uid).update(user_data)

//     alert('User Logged In!!')

//   })
//   .catch(function(error) {
//     var error_code = error.code
//     var error_message = error.message

//     alert(error_message)
//   })
//   }

//   function validate_email(email) {

//     expression = /^[^@]+@\w+(\.\w+)+\w$/

//     if(expression.test(email)==true) {
//         return true
//     } else {
//         return false
//     }


//   }

//   function validate_password(password) {

//     if(password < 6) {
//         return false
//     } else {
//         return true
//     }


//   }

