var fullName = document.getElementById("fullname");
var registerEmail = document.getElementById("registeremail");
var registerPassword = document.getElementById("registerpassword");

console.log("Running Signup Javascript");

// TODO: Add Validate Form

function registerUser() {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  var email = registerEmail.value;

  if (fullName.value === "") {
    alert("Please Enter Name");
    return;
  }

  if (email === "") {
    alert("Please Enter Email");
    return;
  }

  if (registerPassword.value === "") {
    alert("Please Enter Password");
    return;
  }

  if (registerPassword.value.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      alert("Email Already Registered");
      return;
    }
  }

  // validateForm();
  users.push({
    fullName: fullName.value,
    email: registerEmail.value.toLowerCase(),
    password: registerPassword.value,
  });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup Successfull");

  fullName.value = "";
  registerEmail.value = "";
  registerPassword.value = "";
}
