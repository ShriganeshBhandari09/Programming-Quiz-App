var userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));
var profileName = document.getElementById("profile-name");

function generateProfileName() {
  profileName.innerText = userLoggedIn[0].fullName;
  // console.log(userLoggedIn[0].fullName);
}

function redirectQuizQuestions() {
  window.location.assign("/pages/quiz-questions.html");
  generateProfileName();
}
