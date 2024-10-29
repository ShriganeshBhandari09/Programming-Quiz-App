//SignUp Function Starts
function registerUser() {
  console.log("Signup is running");
  var users = JSON.parse(localStorage.getItem("users")) || [];
  // var email = registerEmail.value;
  let fullName = document.getElementById("fullname").value;
  let registerEmail = document.getElementById("registeremail").value;
  let registerPassword = document.getElementById("registerpassword").value;
  let checboxSelected = document.querySelector("input[type=checkbox]:checked");

  if (fullName.trim() === "") {
    alert("Please Enter Name");
    return;
  }

  if (registerEmail === "") {
    alert("Please Enter Email");
    return;
  }

  if (registerPassword === "") {
    alert("Please Enter Password");
    return;
  }

  if (registerPassword.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  if (!checboxSelected) {
    alert("Accept Terms and Conditions");
    return;
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === registerEmail.toLowerCase()) {
      alert("Email Already Registered");
      return;
    }
  }

  // validateForm();
  users.push({
    fullName: fullName,
    email: registerEmail.toLowerCase(),
    password: registerPassword,
  });
  localStorage.setItem("users", JSON.stringify(users));
  window.location.assign("../index.html");
  alert("Signup Successfull");
}
//Signup Function Ended

//Login Function Starts
function loginUser() {
  let email = document.getElementById("loginemail").value.toLowerCase();
  let password = document.getElementById("loginpassword").value;
  let users = JSON.parse(localStorage.getItem("users"));
  let isLoggedIn = false;
  let userLoggedIn = [];
  let adminLoggedIn = [];

  if (email === "") {
    alert("Please Enter Email");
    return;
  }

  if (password === "") {
    alert("Please Enter Password");
    return;
  }

  if (email === "admin@gmail.com" && password === "admin") {
    console.log("Admin Login Successfull");
    window.location.assign("/admin/dashboard.html");
    adminLoggedIn.push({ name: "Admin", email: email, password: password });
    sessionStorage.setItem("adminLoggedIn", JSON.stringify(adminLoggedIn));
    return;
  }

  for (let i = 0; i < users.length; i++) {
    if (email != users[i].email && password != users[i].password) {
      isLoggedIn = false;
      console.log("if is running");
    } else if (email === users[i].email && password === users[i].password) {
      isLoggedIn = true;
      userLoggedIn.push(users[i]);
      sessionStorage.setItem("userLoggedIn", JSON.stringify(userLoggedIn));
      console.log("Else if is running");
    }
  }
  console.log(isLoggedIn);
  console.log(userLoggedIn);

  if (isLoggedIn === true) {
    alert("Login Successfull");
    console.log("Login Successfull");
    window.location.assign("/pages/dashboard.html");
    console.log("Logged In is Running");
    return;
  } else {
    console.log("Incorrect Email or Password");
    alert("Incorrect Email or Password");
    return;
  }
}
//Login Function Ended

//Load Profile Name Starts
function generateProfileName() {
  let userLoggedIn = JSON.parse(sessionStorage.getItem("userLoggedIn"));
  let profileName = document.getElementById("profile-name");
  let image = document.getElementById("profile-img");
  profileName.innerText = `Welcome, ${userLoggedIn[0].fullName}`;
  // console.log(userLoggedIn[0].fullName);
  image.src = `https://ui-avatars.com/api/?name=${userLoggedIn[0].fullName}&background=F3BD00&color=000`;
}
//Load Profile Name Ended

//Redirect from dashboard to quiz questions
function redirectQuizQuestions() {
  window.location.assign("/pages/quiz-questions.html");
}
//Redirect from dashboard to quiz questions Ended

//Logout Function Starts
function logout() {
  let text = "Are you sure you want to Logout?";
  if (confirm(text) == true) {
    sessionStorage.removeItem("userLoggedIn");
    sessionStorage.removeItem("adminLoggedIn");
    window.location.assign("../index.html");
  }
}
//Logout Function Ends

//Load Questions Function Starts
var questions = [
  {
    question: "What does HTML stand for?",
    supportingText: "HTML is the foundational language for creating web pages.",
    options: [
      "Hyper Text Markup Language",
      "High-Level Text Markup Language",
      "Hyperlink and Text Markup Language",
      "Hyper Text Multiple Language",
    ],
    answer: "Hyper Text Markup Language",
    explanation:
      "HTML stands for Hyper Text Markup Language, and it is used to structure content on the web.",
  },
  {
    question: "Which of the following is a semantic HTML element?",
    supportingText:
      "Semantic elements clearly describe their meaning to both the browser and the developer.",
    options: ["&lt;div&gt;", "&lt;span&gt;", "&lt;header&gt;", "&lt;table&gt;"],
    answer: "&lt;header&gt;",
    explanation:
      "The &lt;header&gt; element is semantic and is used to define the header of a document or section.",
  },
  {
    question: "What is the correct way to link a CSS file in HTML?",
    supportingText: "Linking CSS files is essential for styling web pages.",
    options: [
      "&lt;link href='styles.css'&gt;",
      "&lt;link rel='stylesheet' href='styles.css'&gt;",
      "&lt;link rel='css' href='styles.css'&gt;",
      "&lt;style src='styles.css'&gt;",
    ],
    answer: "&lt;link rel='stylesheet' href='styles.css'&gt;",
    explanation:
      "The correct way to link an external CSS file is by using the &lt;link&gt; tag with rel='stylesheet'.",
  },
  {
    question: "Which HTML element is used to create an unordered list?",
    supportingText: "Lists are important for structuring related items.",
    options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
    answer: "&lt;ul&gt;",
    explanation:
      "The &lt;ul&gt; element is used to create an unordered list, while &lt;ol&gt; creates an ordered list.",
  },
  {
    question: "What is the purpose of the alt attribute in an image tag?",
    supportingText: "The alt attribute enhances accessibility and SEO.",
    options: [
      "To provide alternate text for an image",
      "To specify the image source",
      "To link to another page",
      "To set the image size",
    ],
    answer: "To provide alternate text for an image",
    explanation:
      "The alt attribute provides alternative text for an image if it cannot be displayed, improving accessibility.",
  },
  {
    question: "Which CSS property is used to change the text color?",
    supportingText:
      "This property is essential for controlling text appearance.",
    options: ["text-color", "color", "font-color", "bgcolor"],
    answer: "color",
    explanation:
      "The color property in CSS is used to change the color of the text in an element.",
  },
  {
    question: "How can you center a block element horizontally in CSS?",
    supportingText: "Centering elements is a common layout requirement.",
    options: [
      "margin: auto;",
      "text-align: center;",
      "align: center;",
      "center: block;",
    ],
    answer: "margin: auto;",
    explanation:
      "Using 'margin: auto;' on a block element with a defined width will center it horizontally.",
  },
  {
    question: "Which property controls the text size in CSS?",
    supportingText: "Text size is crucial for readability in web design.",
    options: ["text-size", "font-size", "size", "text-style"],
    answer: "font-size",
    explanation:
      "The font-size property is used to set the size of the text in an element.",
  },
  {
    question: "What does CSS stand for?",
    supportingText: "CSS plays a critical role in web design.",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
    explanation:
      "CSS stands for Cascading Style Sheets, used for styling and layout of web pages.",
  },
  {
    question: "Which JavaScript method is used to access an element by its id?",
    supportingText: "This method allows for easy DOM manipulation.",
    options: [
      "getElementById()",
      "querySelector()",
      "getElementsByClassName()",
      "getElementByTagName()",
    ],
    answer: "getElementById()",
    explanation:
      "The getElementById() method selects an HTML element based on its unique id.",
  },
  {
    question: "What is the purpose of the JavaScript 'let' keyword?",
    supportingText: "Variable declarations affect scope and lifespan.",
    options: [
      "To declare a variable with block scope",
      "To declare a constant variable",
      "To declare a variable globally",
      "To create a function",
    ],
    answer: "To declare a variable with block scope",
    explanation:
      "'let' is used to declare variables that are block-scoped, unlike 'var', which is function-scoped.",
  },
  {
    question:
      "Which operator is used to assign a value to a variable in JavaScript?",
    supportingText:
      "Understanding assignment operators is fundamental in programming.",
    options: ["=", "==", "===", "=>"],
    answer: "=",
    explanation:
      "The '=' operator is used to assign a value to a variable in JavaScript.",
  },
  {
    question: "What is the purpose of the JSON format?",
    supportingText:
      "Data interchange formats are critical for web applications.",
    options: [
      "To store images",
      "To format text",
      "To transmit data objects between a server and a web application",
      "To style web pages",
    ],
    answer: "To transmit data objects between a server and a web application",
    explanation:
      "JSON (JavaScript Object Notation) is a lightweight format for data interchange, commonly used in web APIs.",
  },
  {
    question:
      "Which of the following is NOT a valid way to declare a variable in JavaScript?",
    supportingText:
      "Understanding variable declarations is important for coding effectively.",
    options: ["var myVar;", "let myVar;", "const myVar;", "new myVar;"],
    answer: "new myVar;",
    explanation:
      "'new myVar;' is not a valid variable declaration; 'var', 'let', and 'const' are the correct ways.",
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    supportingText: "The 'this' keyword refers to the execution context.",
    options: [
      "To refer to the global object",
      "To refer to the calling object",
      "To create a new object",
      "To refer to the previous object",
    ],
    answer: "To refer to the calling object",
    explanation:
      "In JavaScript, 'this' refers to the object that is executing the current function.",
  },
  {
    question: "Which HTML tag is used to define a hyperlink?",
    supportingText: "Hyperlinks are essential for navigation on the web.",
    options: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;", "&lt;url&gt;"],
    answer: "&lt;a&gt;",
    explanation:
      "The &lt;a&gt; tag is used to define a hyperlink that links to another webpage or resource.",
  },
  {
    question: "How can you create a comment in CSS?",
    supportingText: "Comments help document code for better readability.",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "&lt;!-- This is a comment --&gt;",
      "# This is a comment",
    ],
    answer: "/* This is a comment */",
    explanation: "In CSS, comments are created using '/* comment */'.",
  },
  {
    question:
      "Which of the following CSS properties can be used to create a responsive layout?",
    supportingText: "Responsive design adapts to different screen sizes.",
    options: ["width", "max-width", "flex", "All of the above"],
    answer: "All of the above",
    explanation:
      "All these properties can help create responsive designs by controlling element sizes and layouts.",
  },
  {
    question: "What is the purpose of the 'box-sizing' property in CSS?",
    supportingText: "Box model properties are vital for layout control.",
    options: [
      "To set the width of an element",
      "To define the box model behavior of an element",
      "To add padding to an element",
      "To set the border of an element",
    ],
    answer: "To define the box model behavior of an element",
    explanation:
      "The 'box-sizing' property determines how the total width and height of an element is calculated, affecting layout.",
  },
  {
    question: "What does the 'float' property do in CSS?",
    supportingText:
      "The float property is used for positioning and layout control.",
    options: [
      "It makes an element invisible",
      "It allows elements to be floated to the left or right of their container",
      "It centers an element horizontally",
      "It adds space around an element",
    ],
    answer:
      "It allows elements to be floated to the left or right of their container",
    explanation:
      "The 'float' property in CSS is used to position an element to the left or right within its container, allowing text and inline elements to wrap around it.",
  },
];

function storeQuestion() {
  localStorage.setItem("questions", JSON.stringify(questions));
}
if (!localStorage.getItem("questions")) {
  storeQuestion();
}

// console.log("Runnng Load Questions Script");

// // console.log(JSON.parse(localStorage.getItem("questions")));

var questions = JSON.parse(localStorage.getItem("questions"));
// console.log(questions.length);
var question = document.getElementById("question");
var currntQuestion = document.getElementById("currentQuestion");
var totalQuestions = document.getElementById("totalQuestions");
var questionheading = document.getElementById("question-heading");
var questionDescription = document.getElementById("question-description");

var optionOne = document.getElementById("option-one");
var optionTwo = document.getElementById("option-two");
var optionThree = document.getElementById("option-three");
var optionFour = document.getElementById("option-four");

var labelOne = document.getElementById("label-one");
var labelTwo = document.getElementById("label-two");
var labelThree = document.getElementById("label-three");
var labelFour = document.getElementById("label-four");

var previousBtn = document.getElementById("previous-btn");
var submitBtn = document.getElementById("forward-btn");

var mainContainer = document.getElementById("main-container");
var scoreContainer = document.getElementById("score-container");

var totalQuestions = 10;
// console.log(totalQuestions);
var slider = document.getElementById("rangeSliderValue");
var maxSliderValue = 100;
var sliderValue = maxSliderValue / totalQuestions;
var sliderValueArray = [];
// sliderValueArray.push(sliderValue);
// console.log(sliderValueArray);
// slider.style.width = `${sliderValue}%`;
// function increaseSliderValue() {
//   sliderValue = sliderValue + maxSliderValue / totalQuestions;
//   if (sliderValue > 100) {
//     sliderValue = 100;
//   }
//   sliderValueArray.push(sliderValue);
//   console.log(sliderValueArray);
//   slider.style.width = `${sliderValue}%`;
//   console.log(slider.style.width);
// }
var sliderValue = maxSliderValue / totalQuestions;
sliderValueArray.push(sliderValue);
for (let j = 0; j < totalQuestions; j++) {
  sliderValue = sliderValue + maxSliderValue / totalQuestions;
  if (sliderValue > 100) {
    sliderValue = 100;
    sliderValueArray.push(sliderValue);
  } else {
    sliderValueArray.push(sliderValue);
  }
}
// console.log(sliderValueArray);

let randomQuestionArray = [];
let randomQuestionLength = questions.length;
for (let i = 0; i < randomQuestionLength; i++) {
  let randomNumber = Math.floor(Math.random() * randomQuestionLength);

  if (!randomQuestionArray.includes(randomNumber)) {
    randomQuestionArray.push(randomNumber);
  } else {
    i--;
  }
}

// console.log(randomQuestionArray);

var questionIndex = 0;
function displayQuestion() {
  // questionDescription.innerText =
  //   questions[randomQuestionArray[questionIndex]].supportingText;
  optionOne.value = questions[randomQuestionArray[questionIndex]].options[0];
  optionTwo.value = questions[randomQuestionArray[questionIndex]].options[1];
  optionThree.value = questions[randomQuestionArray[questionIndex]].options[2];
  optionFour.value = questions[randomQuestionArray[questionIndex]].options[3];

  labelOne.innerHTML = `1. ${
    questions[randomQuestionArray[questionIndex]].options[0]
  }`;
  labelTwo.innerHTML = `2. ${
    questions[randomQuestionArray[questionIndex]].options[1]
  }`;
  labelThree.innerHTML = `3. ${
    questions[randomQuestionArray[questionIndex]].options[2]
  }`;
  labelFour.innerHTML = `4. ${
    questions[randomQuestionArray[questionIndex]].options[3]
  }`;
}

function loadQuestion() {
  generateProfileName();
  questionheading.innerText = `Question ${
    questionIndex + 1
  } of ${totalQuestions}`;
  question.innerText = `${questionIndex + 1}.${
    questions[randomQuestionArray[questionIndex]].question
  }`;
  displayQuestion();
  previousBtn.style.visibility = "hidden";
  slider.style.width = `${sliderValueArray[questionIndex]}%`;
  // console.log(selectedQuestionid);
}

// function generateQuestions() {
//   if (questionId === questions.length - 1) {
//     questionheading.innerText = "Last Question";
//     submitBtn.innerHTML = `Submit <i class="fa-solid fa-arrow-right"></i>`;
//   } else {
//     questionheading.innerText = `Question ${
//       questionId + 1
//     } of ${totalQuestions}`;
//   }

//   question.innerText = `${questionId + 1}.${questions[questionId].question}`;
//   optionOne.value = questions[questionId].options[0];
//   optionTwo.value = questions[questionId].options[1];
//   optionThree.value = questions[questionId].options[2];
//   optionFour.value = questions[questionId].options[3];

//   labelOne.innerText = questions[questionId].options[0];
//   labelTwo.innerText = questions[questionId].options[1];
//   labelThree.innerText = questions[questionId].options[2];
//   labelFour.innerText = questions[questionId].options[3];
//   questionId++;
//   // console.log("The question id is", questionId);
//   // console.log("The selected question id is", selectedQuestionid);
//   // console.log(" The array is", selectedOptionsArray);
// }

function nextQuestion() {
  questionIndex++;
  if (questionIndex === totalQuestions - 1) {
    questionheading.innerText = "Hey this is the Last Question";
    submitBtn.innerHTML = `Submit <i class="fa-solid fa-arrow-right"></i>`;
  } else {
    questionheading.innerText = `Question ${
      questionIndex + 1
    } of ${totalQuestions}`;
  }
  // console.log(questionIndex);
  // console.log(questions[randomQuestionArray[questionIndex]]);
  question.innerText = `${questionIndex + 1}.${
    questions[randomQuestionArray[questionIndex]].question
  }`;
  displayQuestion();
  previousBtn.style.visibility = "initial";
  slider.style.width = `${sliderValueArray[questionIndex]}%`;
}

function previousQuestion() {
  questionIndex--;
  if (questionIndex === 0) {
    previousBtn.style.visibility = "hidden";
  }
  questionheading.innerText = `Question ${
    questionIndex + 1
  } of ${totalQuestions}`;
  // console.log(questionIndex);
  displayQuestion();
  // console.log(questions[randomQuestionArray[questionIndex]]);
  slider.style.width = `${sliderValueArray[questionIndex]}%`;
  // selectedQuestionid--;
  console.log(questionIndex);
  console.log(selectedOptionsArray[questionIndex]);
  var checkedOption = document.querySelector(
    `input[value="${selectedOptionsArray[questionIndex]}"]`
  );
  console.log(checkedOption.value);
  if (checkedOption.value === selectedOptionsArray[questionIndex]) {
    console.log(checkedOption);
    checkedOption.checked = true;
  }
  console.log(totalQuestions);
}

// selectedQuestionid = 0;
var selectedOptionsArray = [];
// var selectedOption = document.querySelector('input[name="options"]:checked');
// function compareAns(selectedOption) {
//   if (selectedQuestionid === questions.length) {
//     selectedOptionsArray.push(selectedOption.value);
//     selectedOption.checked = false;
//     console.log(selectedOptionsArray);
//     calculateMarks();
//   } else {
//     if (!selectedOption) {
//       alert("please select the answer");
//     } else {
//       selectedOptionsArray.push(selectedOption.value);
//       selectedOption.checked = false;
//       console.log(selectedOptionsArray);
//       console.log(selectedOption);
//       nextQuestion();
//       selectedQuestionid++;
//     }
//   }
//   console.log(selectedQuestionid);
// }

function submitAnswers() {
  let selectedOption = document.querySelector('input[name="options"]:checked');
  if (questionIndex === totalQuestions - 1) {
    selectedOptionsArray.splice(questionIndex, 1, selectedOption.value);
    selectedOption.checked = false;
    console.log(selectedOptionsArray);
    let text = "Are you sure you want to submit the Quiz?";
    if (confirm(text) == true) {
      calculateMarks();
    }
  } else {
    if (!selectedOption) {
      alert("Please Select the Answer");
    } else {
      selectedOptionsArray.splice(questionIndex, 1, selectedOption.value);
      selectedOption.checked = false;
      console.log(selectedOptionsArray);
      console.log(selectedOption);
      nextQuestion();
    }
  }
  // console.log(selectedQuestionid)
}

// const dummyData = [
//   {
//     fullName: "Aarav Sharma",
//     marks: 80,
//     email: "aarav.sharma@example.com",
//     noOfTimeTestGiven: 4,
//     selectedAnswers: [1, 2, 3, 4, 1, 3, 2, 1, 4, 2],
//   },
//   {
//     fullName: "Priya Verma",
//     marks: 70,
//     email: "priya.verma@example.com",
//     noOfTimeTestGiven: 3,
//     selectedAnswers: [2, 3, 1, 3, 2, 2, 1, 4, 3, 2],
//   },
//   {
//     fullName: "Rohan Patel",
//     marks: 50,
//     email: "rohan.patel@example.com",
//     noOfTimeTestGiven: 3,
//     selectedAnswers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   },
//   {
//     fullName: "Sneha Gupta",
//     marks: 60,
//     email: "sneha.gupta@example.com",
//     noOfTimeTestGiven: 6,
//     selectedAnswers: [3, 2, 4, 2, 3, 1, 3, 2, 4, 3],
//   },
//   {
//     fullName: "Vikram Rao",
//     marks: 50,
//     email: "vikram.rao@example.com",
//     noOfTimeTestGiven: 7,
//     selectedAnswers: [4, 3, 2, 1, 4, 3, 4, 2, 1, 2],
//   },
//   {
//     fullName: "Ananya Singh",
//     marks: 40,
//     email: "ananya.singh@example.com",
//     noOfTimeTestGiven: 10,
//     selectedAnswers: [1, 4, 3, 2, 3, 1, 2, 1, 4, 3],
//   },
//   {
//     fullName: "Karan Bhandari",
//     marks: 40,
//     email: "karan.bhandari@gmail.com",
//     noOfTimeTestGiven: 4,
//     selectedAnswers: [2, 3, 4, 1, 2, 4, 3, 3, 2, 1],
//   },
// ];

// function storeDummyData() {
//   localStorage.setItem("usersGivenTests", JSON.stringify(dummyData)) || [];
// }

// if (!localStorage.getItem("usersGivenTests")) {
//   storeDummyData();
// }

var marks = 0;
var marksHeading = document.getElementById("marks");
var selectedAnswersArray = [];
var tests = [];
var correctAnswers = 0;
var noOfTimeTestGiven = 1;
function calculateMarks() {
  let userGivenTests =
    JSON.parse(localStorage.getItem("usersGivenTests")) || [];
  console.log(userGivenTests);
  let userLoggedIn = JSON.parse(sessionStorage.getItem("userLoggedIn"));
  mainContainer.style.display = "none";
  scoreContainer.style.display = "inline";
  for (let index = 0; index < selectedOptionsArray.length; index++) {
    var correctAnswer = questions[randomQuestionArray[index]].answer;
    if (selectedOptionsArray[index] === correctAnswer) {
      marks += 10;
      console.log("Running");
      console.log(marks);
    }
    marksHeading.innerText = `${
      userLoggedIn[0].fullName
    } scored ${marks} out of ${totalQuestions * 10}`;
    var questionAnswerContainer = document.createElement("div");
    questionAnswerContainer.className = "question-answer-container";
    questionAnswerContainer.innerHTML = `<h2 class="container__question" id="question">${
      index + 1
    }. ${questions[randomQuestionArray[index]].question}</h2>
        <p class="container__selected-option">Selected Answer is:- ${
          selectedOptionsArray[index]
        }</p>
              <p class="container__correct-answer">Correct Answer is :- ${
                questions[randomQuestionArray[index]].answer
              }</p>
              <p class="container__correct-answer-explanation">${
                questions[randomQuestionArray[index]].explanation
              }
              `;
    document
      .getElementById("display-question-answers-continer")
      .appendChild(questionAnswerContainer);

    selectedAnswersArray.push({
      question: `${questions[randomQuestionArray[index]].question}`,
      selectedAnswer: `${selectedOptionsArray[index]}`,
      correctAnswer: correctAnswer,
      options: questions[randomQuestionArray[index]].options,
    });

    console.log(questionAnswerContainer);
    if (selectedOptionsArray[index] === correctAnswer) {
      questionAnswerContainer.classList.add("question-container-right-answers");
      correctAnswers++;
    } else {
      questionAnswerContainer.classList.add("question-container-wrong-answers");
    }
  }
  let loggedInEmail = userLoggedIn[0].email;

  date = new Date();
  tests.push({
    testNo: noOfTimeTestGiven,
    selectedAnswers: selectedAnswersArray,
    marks: marks,
    date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    correctAnswers: correctAnswers,
  });

  const existingTest = userGivenTests.find(
    (test) => test.email === loggedInEmail
  );

  if (existingTest) {
    let tests = existingTest.tests;
    tests.push({
      testNo: existingTest.noOfTimeTestGiven + 1,
      selectedAnswers: selectedAnswersArray,
      marks: marks,
      date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      correctAnswers: correctAnswers,
    });
    noOfTimeTestGiven = existingTest.noOfTimeTestGiven + 1;
    existingTest.noOfTimeTestGiven = noOfTimeTestGiven;
    existingTest.marks = marks;
    // existingTest.selectedAnswers = selectedAnswersArray;
    // existingTest.date = `${date.getDate()}-${
    //   date.getMonth() + 1
    // }-${date.getFullYear()}`;
    // console.log("If is running");
    // existingTest.time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    existingTest.tests = tests;
  } else {
    userGivenTests.push({
      fullName: userLoggedIn[0].fullName,
      marks: marks,
      email: userLoggedIn[0].email,
      noOfTimeTestGiven: noOfTimeTestGiven,
      tests: tests,
    });
    console.log("Else is running");
  }
  console.log(userGivenTests);
  localStorage.setItem("usersGivenTests", JSON.stringify(userGivenTests));
}

//Display LeaderBoard
function loadLeaderboard() {
  generateProfileName();
  let userGivenTests = JSON.parse(localStorage.getItem("usersGivenTests"));
  console.log(userGivenTests);
  userGivenTests.sort((a, b) => b.marks - a.marks);
  console.log(userGivenTests);
  let displayRank = document.getElementById("display-rank");
  let supportingText = document.getElementById("supporting-text");

  let firstRankName = document.getElementById("first-rank-name");
  let thirdRankName = document.getElementById("third-rank-name");
  let secondRankName = document.getElementById("second-rank-name");
  let firstRankProfileImg = document.getElementById("first-rank-proile-img");
  let secondRankProfileImg = document.getElementById("second-rank-proile-img");
  let thirdRankProfileImg = document.getElementById("third-rank-proile-img");

  let firstRankScore = document.getElementById("first-rank-score");
  let secondRankScore = document.getElementById("second-rank-score");
  let thirdRankScore = document.getElementById("third-rank-score");
  let currentUserScore = document.getElementById("current-user-score");

  let currentUser = JSON.parse(sessionStorage.getItem("userLoggedIn"));
  console.log(currentUser);
  console.log(userGivenTests);
  for (let i = 0; i < userGivenTests.length; i++) {
    if (i === 0) {
      currentUserScore.style.display = "none";
      firstRankName.innerText = userGivenTests[i].fullName;
      firstRankProfileImg.src = `https://ui-avatars.com/api/?name=${userGivenTests[i].fullName}`;
      firstRankScore.innerText = `${userGivenTests[0].marks}`;
    } else if (i === 1) {
      secondRankName.innerText = userGivenTests[i].fullName;
      currentUserScore.style.display = "none";
      secondRankProfileImg.src = `https://ui-avatars.com/api/?name=${userGivenTests[i].fullName}`;
      secondRankScore.innerText = `${userGivenTests[1].marks}`;
    } else if (i === 2) {
      thirdRankName.innerText = userGivenTests[i].fullName;
      currentUserScore.style.display = "none";
      thirdRankProfileImg.src = `https://ui-avatars.com/api/?name=${userGivenTests[i].fullName}`;
      thirdRankScore.innerText = `${userGivenTests[2].marks}`;
    } else if (i === 3) {
      document.getElementById("fourth-rank").innerText = `#${i + 1}`;
      document.getElementById("fourth-rank-name").innerText =
        userGivenTests[i].fullName;
      document.getElementById("fourth-rank-score").innerText =
        userGivenTests[i].marks;
      if (userGivenTests[i].fullName === currentUser[0].fullName) {
        currentUserScore.style.display = "flex";
        currentUserScore.style.backgroundColor = "#FBF1CE";
        document.getElementById("current-user-rank").innerText = `#${i + 1}`;
        document.getElementById("current-user-name").innerText =
          currentUser[0].fullName;
        document.getElementById(
          "current-user-marks"
        ).innerText = `${userGivenTests[i].marks}`;
      }
    } else if (i === 4) {
      document.getElementById("fifth-rank").innerText = `#${i + 1}`;
      document.getElementById("fifth-rank-name").innerText =
        userGivenTests[i].fullName;
      document.getElementById("fifth-rank-score").innerText =
        userGivenTests[i].marks;
      if (userGivenTests[i].fullName === currentUser[0].fullName) {
        currentUserScore.style.display = "flex";
        currentUserScore.style.backgroundColor = "#FBF1CE";
        document.getElementById("current-user-rank").innerText = `#${i + 1}`;
        document.getElementById("current-user-name").innerText =
          currentUser[0].fullName;
        document.getElementById(
          "current-user-marks"
        ).innerText = `${userGivenTests[i].marks}`;
      }
    } else if (i === 5) {
      document.getElementById("sixth-rank").innerText = `#${i + 1}`;
      document.getElementById("sixth-rank-name").innerText =
        userGivenTests[i].fullName;
      document.getElementById("sixth-rank-score").innerText =
        userGivenTests[i].marks;
      if (userGivenTests[i].fullName === currentUser[0].fullName) {
        currentUserScore.style.display = "flex";
        currentUserScore.style.backgroundColor = "#FBF1CE";
        document.getElementById("current-user-rank").innerText = `#${i + 1}`;
        document.getElementById("current-user-name").innerText =
          currentUser[0].fullName;
        document.getElementById(
          "current-user-marks"
        ).innerText = `${userGivenTests[i].marks}`;
      }
    } else if (i > 5) {
      var rankItem = document.createElement("div");
      rankItem.id = `rank-${i + 1}`;
      // console.log(rankItem);
      rankItem.innerHTML = `<div class="rank-item">
              <div class="rank-item__name">
                <h3 class="rank-item__rank">#${i + 1}</h3>
                <h3 class="rank-item__username">${
                  userGivenTests[i].fullName
                }</h3>
              </div>
              <div class="rank-item__score">
                <h3>${userGivenTests[i].marks}</h3>
              </div>
            </div>`;
      document.getElementById("other-ranks-section").appendChild(rankItem);
      // console.log(document.getElementById(`rank-${i+1}`).style.display = "none")
      //       currentUserScore.style.display = "flex"
      // currentUserScore.style.backgroundColor = "#34fe34"
      // document.getElementById("current-user-rank").innerText = `#${i+1}`
      // document.getElementById("current-user-name").innerText = currentUserName
      // document.getElementById('current-user-marks').innerText = `${userGivenTests[i].marks}`
      // console.log("Present");
      if (userGivenTests[i].fullName === currentUser[0].fullName) {
        currentUserScore.style.display = "flex";
        currentUserScore.style.backgroundColor = "#FBF1CE";
        document.getElementById("current-user-rank").innerText = `#${i + 1}`;
        document.getElementById("current-user-name").innerText =
          currentUser[0].fullName;
        document.getElementById(
          "current-user-marks"
        ).innerText = `${userGivenTests[i].marks}`;
      }
    }
  }
  let currentUserName = currentUser[0].fullName;
  //   console.log(currentUserName);
  let currentUserIndex =
    userGivenTests.findIndex((u) => u.fullName === currentUserName) + 1;
  console.log(currentUserIndex);
  if (currentUserIndex === 1) {
    displayRank.innerText = `Wow, Your Rank Is ${currentUserIndex}st`;
    supportingText.innerHTML = "&#127881 Congratulations &#127881";
    return;
  }
  if (currentUserIndex === 2) {
    displayRank.innerText = `Wow, You Rank ${currentUserIndex}nd`;
    return;
  }
  if (currentUserIndex === 3) {
    displayRank.innerText = `Wow, You Rank ${currentUserIndex}rd`;
    return;
  } else {
    displayRank.innerText = `Wow, You Rank ${currentUserIndex}th`;
  }
}

///////////////////////////////////////////////Admin Side Script//////////////////////////////////////////////////

// //Load Profile Name
function generateAdminProfileName() {
  let adminLoggedIn = JSON.parse(sessionStorage.getItem("adminLoggedIn"));
  let profileName = document.getElementById("profile-name");
  let image = document.getElementById("profile-img");
  profileName.innerText = `Welcome, ${adminLoggedIn[0].name}`;
  // console.log(userLoggedIn[0].fullName);
  image.src = `https://ui-avatars.com/api/?name=${adminLoggedIn[0].name}&background=F3BD00&color=000`;
}

function showSidebar() {
  let headerLogo = document.getElementById("logo");
  let sidebar = document.getElementById("side-bar");
  sidebar.classList.toggle("disable-sidebar");
  headerLogo.classList.toggle("disable-logo");
}
// function loadAdminPage() {
//
//   var adminContainerContent = document.getElementById(
//     "admin-container-content"
//   );
//   var userGivenTests = JSON.parse(localStorage.getItem("usersGivenTests"));
//   var questions = JSON.parse(localStorage.getItem("questions"));
//   var adminPage = document.createElement("div");
//   adminPage.id = "admin-container-content";
//   adminPage.innerHTML = `<h1>Welcome! Admin</h1>
//         <h2>Number of Questions Added : ${questions.length}</h2>
//         <h2>Number of Users Given Tests:  ${userGivenTests.length}</h2>`;
//   adminContainerContent.appendChild(adminPage);
// }

// function fetchQuestions() {
//   var mainContainer = document.getElementById("admin-container");
//   var adminContainerContent = document.getElementById(
//     "admin-container-content"
//   );
//   adminContainerContent.style.display = "none";
//   var questions = JSON.parse(localStorage.getItem("questions"));
//   var questionsPage = document.createElement("div");
//   questionsPage.id = "questions-page-content";
//   for (let i = 0; i < questions.length; i++) {
//     questionsPage.innerHTML += `<h2 class="question">${questions[i].question}</h2>
//         <p class="supporting-text">${questions[i].supportingText}</p>
//         <ul class="opptions">
//           <li>${questions[i].options[0]}</li>
//           <li>${questions[i].options[1]}</li>
//           <li>${questions[i].options[2]}</li>
//           <li>${questions[i].options[3]}</li>
//         </ul>`;
//     mainContainer.appendChild(questionsPage);
//   }
// }

// var questionsLength = 20;
function readAllQuestions() {
  generateAdminProfileName();
  let questions = JSON.parse(localStorage.getItem("questions"));

  let tableData = document.getElementById("question-table-data");
  for (let i = 0; i < questions.length; i++) {
    var newRow = document.createElement("tr");
    newRow.id = `question-${i + 1}`;
    newRow.innerHTML += `<td class="table-content">${i + 1}</td>
    <td>${questions[i].question}</td>
    <td class="table-button"><div class="table-button-div"><button onclick="viewQuestion(${i})"><i class="fa-solid fa-eye"></i></button><button onclick="updateQuestionForm(${i})" id="update-button-${
      i + 1
    }"><i class="fa-solid fa-pencil"></i></button><button onclick="deleteQuestion(${i})" id="delete-button-${
      i + 1
    }"><i class="fa-solid fa-trash"></i></button></div></td>`;
    tableData.appendChild(newRow);
  }

  console.log("running this function");
}
// console.log(tableData)

function showAddQuestionModal() {
  // let quizForm = document.getElementById("quiz-form");
  // quizForm.style.display = "initial";
  // let addQuestionBtn = document.getElementById("add-question-btn");
  // addQuestionBtn.setAttribute("onclick", "addQuestions()");
  // console.log(addQuestionBtn);
  document.querySelector(".overlay").classList.add("showoverlay");
  document
    .querySelector(".quiz-question-form")
    .classList.add("showquestionform");
}

function closeAddQuestionModal() {
  // let quizForm = document.getElementById("quiz-form");
  // quizForm.style.display = "initial";
  // let addQuestionBtn = document.getElementById("add-question-btn");
  // addQuestionBtn.setAttribute("onclick", "addQuestions()");
  // console.log(addQuestionBtn);
  document.querySelector(".overlay").classList.remove("showoverlay");
  document
    .querySelector(".quiz-question-form")
    .classList.remove("showquestionform");
  document
    .querySelector(".update-quiz-question-form")
    .classList.remove("show-update-question-form");
  document
    .querySelector(".view-question")
    .classList.remove("show-view-question");
}

function addQuestions() {
  let questions = JSON.parse(localStorage.getItem("questions")) || [];
  // var email = registerEmail.value;
  let question = document.getElementById("question");
  // let supportingText = document.getElementById("supporting-text");
  let optionOne = document.getElementById("option-one");
  let optionTwo = document.getElementById("option-two");
  let optionThree = document.getElementById("option-three");
  let optionFour = document.getElementById("option-four");
  let correctAnswer = document.getElementById("correct-answer");
  // let explanationText = document.getElementById("explanation-text");
  questions.push({
    question: question.value,
    // supportingText: supportingText.value,
    options: [
      optionOne.value,
      optionTwo.value,
      optionThree.value,
      optionFour.value,
    ],
    answer: correctAnswer.value,
    // explanation: explanationText.value,
  });
  localStorage.setItem("questions", JSON.stringify(questions));
  alert("Added Question Successfull");
  question.value = "";
  // supportingText.value = "";
  optionOne.value = "";
  optionTwo.value = "";
  optionThree.value = "";
  optionFour.value = "";
  correctAnswer.value = "";
  // explanationText.value = "";
  closeAddQuestionModal();
  location.reload();
  readAllQuestions();
}

// function updateQuestionForm() {
//   let quizForm = document.getElementById("quiz-form");
//   quizForm.style.display = "initial";
//   let questions = JSON.parse(localStorage.getItem("questions")) || [];
//   // var email = registerEmail.value;
//   let question = document.getElementById("question");
//   let supportingText = document.getElementById("supporting-text");
//   let optionOne = document.getElementById("option-one");
//   let optionTwo = document.getElementById("option-two");
//   let optionThree = document.getElementById("option-three");
//   let optionFour = document.getElementById("option-four");
//   let explanationText = document.getElementById("explanation-text");

//   for (let i = 0; i < questions.length; i++) {
//     // const element = questions[i];
//     // console.log(element);
//     // console.log(questions[i].id)
//     let questionId = questions[i].id - 1;
//     if (i === questionId) {
//       question.value = `${questions[i].question}`;
//       supportingText.value = `${questions[i].supportingText}`;
//       optionOne.value = `${questions[i].options[0]}`;
//       optionTwo.value = questions[i].options[1];
//       optionThree.value = questions[i].options[2];
//       optionFour.value = questions[i].options[3];
//       explanationText.value = questions[i].explanation;
//       return
//     } else {
//       console.log("Elsei ");
//     }

//     // if(i === 0){
//     //   console.log(true)
//     // }else{
//     //   console.log(false)
//     // }
//   }
// }

// function displayUpdateQuestionForm() {
//   let addQuestionBtn = document.getElementById("add-question-btn")
//   addQuestionBtn.setAttribute('onclick', 'addQuestions()');
//   console.log(addQuestionBtn)

// }

function showUpdateQuestionFormModal() {
  document.querySelector(".overlay").classList.add("showoverlay");
  document
    .querySelector(".update-quiz-question-form")
    .classList.add("show-update-question-form");
}

function closeUpdateQuestionFormModal() {
  document.querySelector(".overlay").classList.remove("showoverlay");
  document
    .querySelector(".update-quiz-question-form")
    .classList.remove("show-update-question-form");
}

// function showAddQuestionModal() {
//   // let quizForm = document.getElementById("quiz-form");
//   // quizForm.style.display = "initial";
//   // let addQuestionBtn = document.getElementById("add-question-btn");
//   // addQuestionBtn.setAttribute("onclick", "addQuestions()");
//   // console.log(addQuestionBtn);
//   document
//     .querySelector(".quiz-question-form")
//     .classList.add("showquestionform");
// }

// function closeAddQuestionModal() {
//   // let quizForm = document.getElementById("quiz-form");
//   // quizForm.style.display = "initial";
//   // let addQuestionBtn = document.getElementById("add-question-btn");
//   // addQuestionBtn.setAttribute("onclick", "addQuestions()");
//   // console.log(addQuestionBtn);
//   document.querySelector(".overlay").classList.remove("showoverlay");
//   document
//     .querySelector(".quiz-question-form")
//     .classList.remove("showquestionform");
// }

function updateQuestionForm(i) {
  let questions = JSON.parse(localStorage.getItem("questions")) || [];
  let question = document.getElementById("updated-question");
  let optionOne = document.getElementById("updated-option-one");
  let optionTwo = document.getElementById("updated-option-two");
  let optionThree = document.getElementById("updated-option-three");
  let optionFour = document.getElementById("updated-option-four");
  let correctAnswer = document.getElementById("updated-correct-answer");
  let updateQuestionBtn = document.getElementById("update-question-button");
  updateQuestionBtn.setAttribute("onclick", `updateQuestion(${i})`);
  console.log(updateQuestionBtn);

  showUpdateQuestionFormModal();

  question.value = `${questions[i].question}`;
  optionOne.value = `${questions[i].options[0]}`;
  optionTwo.value = questions[i].options[1];
  optionThree.value = questions[i].options[2];
  optionFour.value = questions[i].options[3];
  correctAnswer.value = questions[i].answer;
}

function updateQuestion(i) {
  let questions = JSON.parse(localStorage.getItem("questions")) || [];
  let question = document.getElementById("updated-question");
  let optionOne = document.getElementById("updated-option-one");
  let optionTwo = document.getElementById("updated-option-two");
  let optionThree = document.getElementById("updated-option-three");
  let optionFour = document.getElementById("updated-option-four");
  let correctAnswer = document.getElementById("updated-correct-answer");
  questions.splice(i, 1, {
    question: question.value,
    options: [
      optionOne.value,
      optionTwo.value,
      optionThree.value,
      optionFour.value,
    ],
    answer: correctAnswer.value,
  });
  localStorage.setItem("questions", JSON.stringify(questions));
  alert("Updated Question Successfull");
  question.value = "";
  optionOne.value = "";
  optionTwo.value = "";
  optionThree.value = "";
  optionFour.value = "";
  correctAnswer.value = "";
  closeAddQuestionModal();
  location.reload();
  readAllQuestions();
}

function viewQuestionModal() {
  document.querySelector(".overlay").classList.add("showoverlay");
  document.querySelector(".view-question").classList.add("show-view-question");
}

function closeViewQuestionModal() {
  document.querySelector(".overlay").classList.remove("showoverlay");
  document
    .querySelector(".view-question")
    .classList.remove("show-view-question");
}

function viewQuestion(i) {
  let questions = JSON.parse(localStorage.getItem("questions")) || [];
  let question = document.getElementById("view-question");
  let optionOne = document.getElementById("view-option-one");
  let optionTwo = document.getElementById("view-option-two");
  let optionThree = document.getElementById("view-option-three");
  let optionFour = document.getElementById("view-option-four");
  let correctAnswer = document.getElementById("view-correct-answer");
  let updateQuestionBtn = document.getElementById("update-question-button");

  viewQuestionModal();
  // console.log(question,optionOne,optionTwo, optionThree, optionFour, correctAnswer , updateQuestionBtn)
  question.innerText = questions[i].question;
  optionOne.innerHTML = questions[i].options[0];
  optionTwo.innerHTML = questions[i].options[1];
  optionThree.innerHTML = questions[i].options[2];
  optionFour.innerHTML = questions[i].options[3];
  correctAnswer.innerHTML = `Answer is:- ${questions[i].answer}`;
}

function deleteQuestion(i) {
  let questions = JSON.parse(localStorage.getItem("questions")) || [];
  console.log(i);
  let text = "Are you sure you want to delete the Question?";
  if (confirm(text) == true) {
    questions.splice(i, 1);
    localStorage.setItem("questions", JSON.stringify(questions));
    alert("Deleted Question Successfull");
    location.reload();
  }
}

// function deleteUser(i) {
//   let userGivenTests = JSON.parse(localStorage.getItem("usersGivenTests"));
//   console.log(i);
//   let text = "Are you sure you want to delete the User?";
//   if (confirm(text) == true) {
//     userGivenTests.splice(i, 1);
//     localStorage.setItem("usersGivenTests", JSON.stringify(userGivenTests));
//     alert("User Deleted Successfull");
//     location.reload();
//   }
// }

function readAllUsers() {
  generateAdminProfileName();
  let userGivenTests = JSON.parse(localStorage.getItem("usersGivenTests"));
  let tableData = document.getElementById("user-table-data");

  for (let i = 0; i < userGivenTests.length; i++) {
    var newRow = document.createElement("tr");
    newRow.innerHTML += `<td>${i + 1}</td>
    <td>${userGivenTests[i].fullName}</td>
    <td class="options">${userGivenTests[i].email}</td>
    <td>${userGivenTests[i].noOfTimeTestGiven}</td>
    <td>${userGivenTests[i].marks}</td>
    <td class="table-button"><div class="table-button-div"><a href="users-history.html?index=${i}&name=${encodeURIComponent(
      userGivenTests[i].fullName
    )}">
          View Tests
        </a></div></td>`;
    tableData.appendChild(newRow);
  }
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    index: params.get("index"),
    name: params.get("name"),
    testIndex: params.get("testIndex"),
  };
}

// Use the parameters

function loadUserTestDetails() {
  generateAdminProfileName();
  let { index, name } = getQueryParams();

  let usersGivenTests = JSON.parse(localStorage.getItem("usersGivenTests"));
  console.log(index, name);
  generateAdminProfileName();
  let userGivenTests = JSON.parse(localStorage.getItem("usersGivenTests"));
  document.getElementById(
    "user-name"
  ).innerText = `${name} | ${usersGivenTests[index].email}`;

  let tableData = document.getElementById("user-test-table-data");
  let userTests = userGivenTests[index].tests;
  console.log(userTests);
  for (let i = 0; i < userTests.length; i++) {
    var newRow = document.createElement("tr");
    newRow.innerHTML += `<td>${userTests[i].testNo}</td>
    <td>${userTests[i].date}</td>
    <td class="options">${userTests[i].marks}</td>
    <td>${userTests[i].correctAnswers}</td>
    <td class="table-button"><div class="table-button-div"><a href="user-testlist.html?testIndex=${i}&name=${userGivenTests[index].fullName}">
          View Test
        </a></div></td>`;
    tableData.appendChild(newRow);
  }
}

// const { testIndex } = getQueryParams();
// console.log(testIndex)
function viewUserTest() {
  generateAdminProfileName();
  let { name, testIndex } = getQueryParams();

  let usersGivenTests = JSON.parse(localStorage.getItem("usersGivenTests"));

  const userIndex = usersGivenTests.findIndex((user) => user.fullName === name);
  document.getElementById(
    "user-name"
  ).innerText = `${usersGivenTests[userIndex].fullName} | ${usersGivenTests[userIndex].email}`;
  let userTestAnswers =
    usersGivenTests[userIndex].tests[testIndex].selectedAnswers;

  document.getElementById(
    "test-number"
  ).innerText = `Test No. ${usersGivenTests[userIndex].tests[testIndex].testNo}`;
  document.getElementById(
    "test-score"
  ).innerText = `Score: ${usersGivenTests[userIndex].tests[testIndex].marks}`;
  document.getElementById(
    "test-date"
  ).innerText = `Test Date: ${usersGivenTests[userIndex].tests[testIndex].date}`;

  for (let i = 0; i < userTestAnswers.length; i++) {
    const userAnswer = userTestAnswers[i];
    var newDiv = document.createElement("div");
    newDiv.classList.add("user-test-question");
    newDiv.innerHTML += `
    <p><strong>Question:</strong> ${userAnswer.question}</p>
    <div class="options-container">
    <div class="option"><p>1. ${userAnswer.options[0]}<span><i class="fa-solid icon"></i></span></p></div>
    <div class="option"><p>2. ${userAnswer.options[1]}<span><i class="fa-solid icon"></i></span></p></div>
    <div class="option"><p>3. ${userAnswer.options[2]}<span><i class="fa-solid icon"></i></span></p></div>
    <div class="option"><p>4. ${userAnswer.options[4]}<span><i class="fa-solid icon"></i></span></p></div>
    </div>`;

    document.getElementById("user-test-data").appendChild(newDiv);

    const userAnswerIndex = userAnswer.options.findIndex(
      (option) => option === userAnswer.selectedAnswer
    );
    const correctAnswerIndex = userAnswer.options.findIndex(
      (option) => option === userAnswer.correctAnswer
    );

    const correctOptionDiv =
      newDiv.querySelectorAll(".option")[correctAnswerIndex];
    correctOptionDiv.classList.add("question-container-right-answers");
    if (!correctOptionDiv.querySelector(".fa-circle-check")) {
      correctOptionDiv.querySelector(".icon").classList.add("fa-circle-check");
      correctOptionDiv.querySelector(".icon").style.color = "#CB6040";
    }

    const selectedOptionDiv =
      newDiv.querySelectorAll(".option")[userAnswerIndex];
    if (userAnswer.selectedAnswer === userAnswer.correctAnswer) {
      selectedOptionDiv.classList.add("question-container-right-answers");
      if (!selectedOptionDiv.querySelector(".fa-circle-check")) {
        selectedOptionDiv
          .querySelector(".icon")
          .classList.add("fa-circle-check");
        selectedOptionDiv.querySelector(".icon").style.color = "#CB6040";
      }
    } else {
      selectedOptionDiv.classList.add("question-container-wrong-answers");
      if (!selectedOptionDiv.querySelector(".fa-circle-xmark")) {
        selectedOptionDiv
          .querySelector(".icon")
          .classList.add("fa-circle-xmark");
        selectedOptionDiv.querySelector(".icon").style.color = "#31511E";
      }
    }
  }
}

// function viewUserTest(i) {
//   let userGivenTests = JSON.parse(localStorage.getItem("usersGivenTests"));
//   let questions = JSON.parse(localStorage.getItem("questions"));
//   document.querySelector(".users-section").style.display = "none";
//   document.querySelector(".user-test-section").style.display = "initial";

//   // console.log(i);
//   let selectedAnswers = userGivenTests[i].selectedAnswers;
//   console.log(selectedAnswers);
//   console.log(selectedAnswers[0].question);
//   for (let i = 0; i < selectedAnswers.length; i++) {
//     const element = selectedAnswers[i];
//     console.log(element);
//     var usersAnswerContainer = document.querySelector(".user-test-section");
//     var questionAnswerContainer = document.createElement("div");
//     questionAnswerContainer.className = "question-answer-container";
//     questionAnswerContainer.innerHTML += `<h2 class="container__question" id="question">${
//       i + 1
//     }. ${selectedAnswers[i].question}</h2>
//           <p class="container__selected-option">Selected Answer is:- ${
//             selectedAnswers[i].selectedAnswer
//           }</p>
//                 <p class="container__correct-answer">Correct Answer is :- ${
//                   selectedAnswers[i].correctAnswer
//                 }</p>
//                 <p class="container__correct-answer-explanation">${
//                   questions[randomQuestionArray[i]].explanation
//                 }
//                 `;

//     usersAnswerContainer.appendChild(questionAnswerContainer);
//   }
// }

// let userGivenTests = JSON.parse(localStorage.getItem("usersGivenTests"));
// console.log(userGivenTests);

// function viewUserTest(i) {
//   let userGivenTests = JSON.parse(localStorage.getItem("usersGivenTests"));
//   // console.log(userGivenTests);
//   let userName = userGivenTests[i].fullName;
//   let userEmail = userGivenTests[i].email;
//   let userTest = userGivenTests[i].tests;
//   console.log(userName, userTest, userEmail);
// }

function closeUserTestSection() {
  document.querySelector(".user-test-section").style.display = "none";
  document.querySelector(".users-section").style.display = "initial";
}
