const firebaseConfig = {
	apiKey: "AIzaSyDTQmy5MGmVDxvJhQyPuqMoKT6MftrX0_s",
    authDomain: "eifa-web.firebaseapp.com",
    databaseURL: "https://eifa-web-default-rtdb.firebaseio.com",
    projectId: "eifa-web",
    storageBucket: "eifa-web.appspot.com",
    messagingSenderId: "265946432813",
    appId: "1:265946432813:web:9655d14a310ba31d89bfa4",
    measurementId: "G-XHYSMDTK6S"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
//Get Elements
 
 const loginbtn = document.getElementById('signUp');
 const inputs = document.querySelectorAll('input');


 
 
 //Add Sign up event
// signIn.addEventListener('click', e => {
	
// 	//Get mail and pass
// 	const email = mail.value;
// 	const pass = password.value;
// 	const auth = firebase.auth();
// 	//Sign in
// 	const promise = auth.signInWithEmailAndPassword(email,pass);
// 	promise.catch(e => console.log(e.message));
// 	alert("Wlecome "+mail.value);
// });


// Add sign Up event
signUp.addEventListener('click', e => {
	//Get mail and pass
	e.preventDefault();
	const mail = document.getElementById('mail').value;
 	const password = document.getElementById('password').value;

	auth
 .signInWithEmailAndPassword(mail, password)
 .then(function () {
	
   // Declare user variable
   var user = auth.currentUser;

   // Add this user to Firebase Database


   

   // DOne
   alert("User Logged In with "+mail+" and "+password);
 })
 .catch(function (error) {
   // Firebase will use this to alert of its errors
   var error_code = error.code;
   var error_message = error.message;

   alert(error_message);
 });

	
});
//Send verification mail


//Add realtime Listner
firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser) {
		console.log(firebaseUser);
	}else{
		console.log('not logged in');
	}
});

//clear function
signUp.addEventListener('click', () => {
	inputs.forEach(input => input.value = '');
});
 