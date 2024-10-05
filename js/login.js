console.log("Running Login Function File");

var loginEmail = document.getElementById("loginemail");
var loginPassword = document.getElementById("loginpassword");
var users = JSON.parse(localStorage.getItem("users"));

function loginUser() {
  var email = loginEmail.value;
  var password = loginPassword.value;
  var isLoggedIn = false;
  var userLoggedIn = [];

  for (let i = 0; i < users.length; i++) {
    if (email != users[i].email && password != users[i].password) {
      isLoggedIn = false;
      console.log("if is running");
    } else if (email === users[i].email && password === users[i].password) {
      isLoggedIn = true;
      userLoggedIn.push(users[i]);
      localStorage.setItem("userLoggedIn", JSON.stringify(userLoggedIn));
      console.log("Else if is running");
    }
  }
  console.log(isLoggedIn);
  console.log(userLoggedIn);

  if (isLoggedIn === true) {
    alert("Login Successfull");
    console.log("Login Successfull");
    window.location.assign("/pages/dashboard.html");
    return;
  } else {
    console.log("Incorrect Email or Password");
    alert("Incorrect Email or Password");
    return;
  }
}
