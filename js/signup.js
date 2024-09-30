var fullName = document.getElementById("fullname");
var registerEmail = document.getElementById("registeremail");
var registerPassword = document.getElementById("registerpassword");

console.log("Running Signup Javascript");


// TODO: Add Validate Form

var users = JSON.parse(localStorage.getItem("users")) || [];
function registerUser() {
  validateForm();
  users.push({
    fullName: fullName.value,
    email: registerEmail.value,
    password: registerPassword.value,
  });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup Successfull");
}
