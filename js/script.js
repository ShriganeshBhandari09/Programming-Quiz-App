

// console.log("Hello");

// console.log(localStorage.getItem("users"));

// var loginEmail = document.getElementById("loginemail");
// var loginPassword = document.getElementById("loginpassword");
// var users = JSON.parse(localStorage.getItem("users"));
// function loginUser() {
//   for (let i = 0; i < users.length; i++) {
//     console.log("Checking user: ", users[i]);
//     if (
//       users[i].email == loginEmail.value &&
//       users[i].password == loginPassword.value
//     ) {
//       console.log("Login Successful");
//       break;
//     } else {
//       console.log("Incorrect Email or Password");
//     }
//   }
//   console.log("Login Function Running");
// }

// var marks = 0;
// var question = document.getElementById("question");
// var currntQuestion = document.getElementById("currentQuestion");
// var totalQuestions = document.getElementById("totalQuestions");
// var questionheading = document.getElementById("question-heading");
// var mainContainer = document.getElementById("main-container");

// var optionOne = document.getElementById("option-one");
// var optionTwo = document.getElementById("option-two");
// var optionThree = document.getElementById("option-three");
// var optionfour = document.getElementById("option-four");

// var labelOne = document.getElementById("label-one");
// var labelTwo = document.getElementById("label-two");
// var labelThree = document.getElementById("label-three");
// var labelFour = document.getElementById("label-four");

// var forwardBtn = document.getElementById("forward-btn");
// var submitBtn = document.getElementById("final-btn");
// var marksHeading = document.getElementById("marks");

// var questionId = 0;
// totalQuestions.innerText = questions.length;
// function generateQuestions() {
//   if (questionId === questions.length - 1) {
//     questionheading.innerText = "Last Question";
//     forwardBtn.style.display = "none";
//     submitBtn.style.display = "inline";
//   } else {
//     currntQuestion.innerText = questionId + 1;
//   }
//   question.innerText = `${questionId + 1}.${questions[questionId].question}`;
//   optionOne.value = questions[questionId].options[0];
//   optionTwo.value = questions[questionId].options[1];
//   optionThree.value = questions[questionId].options[2];
//   optionfour.value = questions[questionId].options[3];

//   labelOne.innerText = questions[questionId].options[0];
//   labelTwo.innerText = questions[questionId].options[1];
//   labelThree.innerText = questions[questionId].options[2];
//   labelFour.innerText = questions[questionId].options[3];
//   questionId++;
//   console.log("question id", questionId);
// }

// var answer = document.getElementById("answer");
// selectedQuestionid = 1;
// var selectedOptionsArray = [];
// function compareAns() {
//   var selectedOption = document.querySelector('input[name="options"]:checked');
//   if (selectedQuestionid === questions.length) {
//     selectedOptionsArray.push(selectedOption.value);
//     selectedOption.checked = false;
//     console.log(selectedOptionsArray);
//   } else {
//     if (!selectedOption) {
//       alert("please select the answer");
//     } else {
//       selectedOptionsArray.push(selectedOption.value);
//       selectedOption.checked = false;
//       console.log(selectedOptionsArray);
//       generateQuestions();
//       increaseSliderValue();
//       selectedQuestionid++;
//     }
//   }
//   console.log("The question id is", questionId);
//   console.log("The answer id is", selectedQuestionid);
//   console.log(" The array is", selectedOptionsArray);
// }

// // console.log(selectedOptionsArray);

// function calculateMarks() {
//   compareAns();
//   mainContainer.style.display = "none";
//   for (let index = 0; index < selectedOptionsArray.length; index++) {
//     var correctAnswer = questions[index].answer;
//     if (selectedOptionsArray[index] === correctAnswer) {
//       marks++;
//       console.log("Running");
//       console.log(marks);
//       marksHeading.innerText = `You scored ${marks} out of ${questions.length}`;
//     }
//   }
// }

// var slider = document.getElementById("rangeSliderValue");
// var totalQuestions = questions.length;
// var maxSliderValue = 100;
// var sliderValue = maxSliderValue / totalQuestions;
// console.log(sliderValue);
// function increaseSliderValue() {
//   sliderValue = sliderValue + maxSliderValue / totalQuestions;
//   if (sliderValue > 100) {
//     sliderValue = 100;
//     alert("Maximum Value Reached");
//   }
//   slider.style.width = `${sliderValue}%`;
//   console.log(slider.style.width);
// }
