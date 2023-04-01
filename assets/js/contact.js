var uname = document.getElementById('name');
var upno = document.getElementById('phn');
var uemail = document.getElementById('mail');
var umsg = document.getElementById('msg');
var ucourse = document.getElementById('course');
var btn = document.getElementById('btn');
const inputs = document.querySelectorAll('input,textarea,option');

const database = firebase.database();
const usersRef = database.ref('/contacts');
const normalUsersRef = usersRef.child('normal_users');
const superUsersRef = usersRef.child('super_users');

if (uemail.length < 4) {
    alert('Please enter an email address.');
  
}
btn.addEventListener('click', e => {
  e.preventDefault();
  alert(uname.value +' We will reply you soon.' );
  const autoId = usersRef.push().key;

  usersRef.child(autoId).set({
    Name: uname.value,
    Course: ucourse.value,
    Call: upno.value,
    Email: uemail.value,
    Message: umsg.value
  });
}); 

//clear form 
btn.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
});



