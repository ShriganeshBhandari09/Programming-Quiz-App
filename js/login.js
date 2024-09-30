console.log("Running Login Function File");

var loginEmail = document.getElementById("loginemail");
var loginPassword = document.getElementById("loginpassword");
var users = JSON.parse(localStorage.getItem("users"));

function loginUser() {
  var email = loginEmail.value;
  var password = loginPassword.value;
  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email && password === users[i].password) {
      console.log(true);
      alert("Login Successful");
      return;
    } else {
      console.log(false);
      alert("Incorrect Email or Password");
      return;
    }
  }
}
