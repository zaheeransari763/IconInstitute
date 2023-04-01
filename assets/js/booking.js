var uname = document.getElementById('name');
var upno = document.getElementById('pno');
var uemail = document.getElementById('mail');
var upass = document.getElementById('pass');
var udate = document.getElementById('date');
var utime = document.getElementById('time');
var ucourse = document.getElementById('course');
var ustudy = document.getElementById('study');
var submitBtn = document.getElementById('submitBtn');
const inputs = document.querySelectorAll('input,textarea,select');

const database = firebase.database();
const usersRef = database.ref('/bookings');
const normalUsersRef = usersRef.child('normal_users');
const superUsersRef = usersRef.child('super_users');

if (uemail.length < 4) {
    alert('Please enter an email address.');
  
}
submitBtn.addEventListener('click', e => {
  e.preventDefault();
  
  const autoId = usersRef.push().key;

  usersRef.child(autoId).set({
    Name: uname.value,
    AppointmentT: utime.value,
    Qualification: ustudy.value,
    Phone: upno.value,
    Email: uemail.value,
    AppointmentD: udate.value,
    course: ucourse.value,
    Address: upass.value
  });
  alert(uname.value +' your course is Booked');
}); 

//clear form 
submitBtn.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
});



