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

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      alert("Email Already Registered");
      return;
    }
  }

  if (registerPassword.value === "") {
    alert("Please Enter Password");
    return;
  }

  // validateForm();
  users.push({
    fullName: fullName.value,
    email: registerEmail.value,
    password: registerPassword.value,
  });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup Successfull");
}
