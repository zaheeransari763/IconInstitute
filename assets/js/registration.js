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

var submitBtn = document.getElementById('submitBtn');
const inputs = document.querySelectorAll('input,textarea');

const auth = firebase.auth();
const database = firebase.database();
const usersRef = database.ref('/users');


submitBtn.addEventListener('click', e => {
  e.preventDefault();
  
var uname = document.getElementById('name').value;
var ulname = document.getElementById('lname').value;
var upno = document.getElementById('pno').value;
var uemail = document.getElementById('mail').value;
var pass = document.getElementById('pass').value;
var address = document.getElementById('address').value;
var udate = document.getElementById('date').value;

  auth
    .createUserWithEmailAndPassword(uemail, pass)
    .then(function () {
      if (uemail.length < 4) {
        alert('Please enter an email address.');
      
    }
      const autoId = usersRef.push().key;
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      usersRef.child(autoId).set({
        FirstName: uname,
        LastName: ulname,
        Call: upno,
        Email: uemail,
        DOB: udate,
        Address: address,
        Password:pass,
        logged_in:"false"
      });
      alert(uname +' ThankYou for Registering.' );
    
      
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });

}); 

submitBtn.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
});




