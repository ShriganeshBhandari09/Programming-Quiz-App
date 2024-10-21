// console.log("Running Signup Javascript");

// // TODO: Add Validate Form

// function registerUser() {
//   var users = JSON.parse(localStorage.getItem("users")) || [];
//   // var email = registerEmail.value;
//   var fullName = document.getElementById("fullname").value;
//   var registerEmail = document.getElementById("registeremail").value;
//   var registerPassword = document.getElementById("registerpassword").value;

//   if (fullName === "") {
//     alert("Please Enter Name");
//     return;
//   }

//   if (registerEmail === "") {
//     alert("Please Enter Email");
//     return;
//   }

//   if (registerPassword === "") {
//     alert("Please Enter Password");
//     return;
//   }

//   if (registerPassword.length < 6) {
//     alert("Password must be at least 6 characters long.");
//     return;
//   }

//   for (let i = 0; i < users.length; i++) {
//     if (users[i].email === registerEmail) {
//       alert("Email Already Registered");
//       return;
//     }
//   }

//   // validateForm();
//   users.push({
//     fullName: fullName,
//     email: registerEmail.toLowerCase(),
//     password: registerPassword,
//   });
//   localStorage.setItem("users", JSON.stringify(users));
//   alert("Signup Successfull");

//   fullName.value = "";
//   registerEmail.value = "";
//   registerPassword.value = "";
// }
