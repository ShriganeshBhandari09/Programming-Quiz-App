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

//SignUp Function Starts
function registerUser() {
  console.log("Signup is running");
  var users = JSON.parse(localStorage.getItem("users")) || [];
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
  location.href = "../index.html";
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

//Redirect from dashboard to quiz questions
function redirectQuizQuestions() {
  window.location.assign("/pages/quiz-questions.html");
}
//Redirect from dashboard to quiz questions Ended


//Load Question Function Starts
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
var sliderValue = maxSliderValue / totalQuestions;
sliderValueArray.push(sliderValue);
for (let questionIndex = 0; questionIndex < totalQuestions; questionIndex++) {
  sliderValue = sliderValue + maxSliderValue / totalQuestions;
  if (sliderValue > 100) {
    sliderValue = 100;
    sliderValueArray.push(sliderValue);
  } else {
    sliderValueArray.push(sliderValue);
  }
}

let randomQuestionArray = [];
let randomQuestionLength = questions.length;
for (
  let questionIndex = 0;
  questionIndex < randomQuestionLength;
  questionIndex++
) {
  let randomNumber = Math.floor(Math.random() * randomQuestionLength);

  if (!randomQuestionArray.includes(randomNumber)) {
    randomQuestionArray.push(randomNumber);
  } else {
    questionIndex--;
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
  question.innerText = `${questionIndex + 1}.${
    questions[randomQuestionArray[questionIndex]].question
  }`;
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

var selectedOptionsArray = [];

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