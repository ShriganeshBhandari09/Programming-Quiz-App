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
storeQuestion();

// console.log("Runnng Load Questions Script");

// // console.log(JSON.parse(localStorage.getItem("questions")));

var questions = JSON.parse(localStorage.getItem("questions"));

var question = document.getElementById("question");
var currntQuestion = document.getElementById("currentQuestion");
var totalQuestions = document.getElementById("totalQuestions");
var questionheading = document.getElementById("question-heading");
var questionDescription = document.getElementById("question-description");

var optionOne = document.getElementById("option-one");
var optionTwo = document.getElementById("option-two");
var optionThree = document.getElementById("option-three");
var optionfour = document.getElementById("option-four");

var labelOne = document.getElementById("label-one");
var labelTwo = document.getElementById("label-two");
var labelThree = document.getElementById("label-three");
var labelFour = document.getElementById("label-four");

var previousBtn = document.getElementById("previous-btn");
var submitBtn = document.getElementById("forward-btn");

var mainContainer = document.getElementById("main-container");

totalQuestions = questions.length;
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

let randomNumberArray = [];
var totalQuestions = questions.length;

for (let i = 0; i < totalQuestions; i++) {
  let randomNumber = Math.floor(Math.random() * totalQuestions);

  if (!randomNumberArray.includes(randomNumber)) {
    randomNumberArray.push(randomNumber);
  } else {
    i--;
  }
}

var questionIndex = 0;
function displayQuestion() {
  questionDescription.innerText =
    questions[randomNumberArray[questionIndex]].supportingText;
  optionOne.value = questions[randomNumberArray[questionIndex]].options[0];
  optionTwo.value = questions[randomNumberArray[questionIndex]].options[1];
  optionThree.value = questions[randomNumberArray[questionIndex]].options[2];
  optionfour.value = questions[randomNumberArray[questionIndex]].options[3];

  labelOne.innerHTML = `1. ${
    questions[randomNumberArray[questionIndex]].options[0]
  }`;
  labelTwo.innerHTML = `2. ${
    questions[randomNumberArray[questionIndex]].options[1]
  }`;
  labelThree.innerHTML = `3. ${
    questions[randomNumberArray[questionIndex]].options[2]
  }`;
  labelFour.innerHTML = `4. ${
    questions[randomNumberArray[questionIndex]].options[3]
  }`;
}

function loadQuestion() {
  questionheading.innerText = `Question ${
    questionIndex + 1
  } of ${totalQuestions}`;
  question.innerText = `${questionIndex + 1}.${
    questions[randomNumberArray[questionIndex]].question
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
//   optionfour.value = questions[questionId].options[3];

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
  if (questionIndex === randomNumberArray.length - 1) {
    questionheading.innerText = "Hey this is the Last Question";
    submitBtn.innerHTML = `Submit <i class="fa-solid fa-arrow-right"></i>`;
  } else {
    questionheading.innerText = `Question ${
      questionIndex + 1
    } of ${totalQuestions}`;
  }
  // console.log(questionIndex);
  // console.log(questions[randomNumberArray[questionIndex]]);
  question.innerText = `${questionIndex + 1}.${
    questions[randomNumberArray[questionIndex]].question
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
  // console.log(questions[randomNumberArray[questionIndex]]);
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
  var selectedOption = document.querySelector('input[name="options"]:checked');
  if (questionIndex === questions.length - 1) {
    selectedOptionsArray.push(selectedOption.value);
    selectedOption.checked = false;
    console.log(selectedOptionsArray);
    calculateMarks();
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
function calculateMarks() {
  var userGivenTests =
    JSON.parse(localStorage.getItem("UsersGivenTests")) || [];
  var userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));
  mainContainer.style.display = "none";
  for (let index = 0; index < selectedOptionsArray.length; index++) {
    var correctAnswer = questions[randomNumberArray[index]].answer;
    if (selectedOptionsArray[index] === correctAnswer) {
      marks += 10;
      console.log("Running");
      console.log(marks);
    }
    marksHeading.innerText = `${
      userLoggedIn[0].fullName
    } scored ${marks} out of ${totalQuestions * 10}`;
    var questionAnswerContainer = document.createElement("div");
    questionAnswerContainer.innerHTML = `<div><h2 class="container__question" id="question">${
      questions[randomNumberArray[index]].question
    }</h2>
        <p class="container__selected-option">Selected Answer is:- ${
          selectedOptionsArray[index]
        }</p>
              <p class="container__correct-answer">Correct Answer is :- ${
                questions[randomNumberArray[index]].answer
              }</p>
              <p class="container__correct-answer-explanation">${
                questions[randomNumberArray[index]].explanation
              }
              </div>`;
    document
      .getElementById("display-question-answers-continer")
      .appendChild(questionAnswerContainer);
  }

  date = new Date();
  userGivenTests.push({
    fullName: userLoggedIn[0].fullName,
    marks: marks,
    date: date,
    time: date.getTime(),
  });
  localStorage.setItem("UsersGivenTests", JSON.stringify(userGivenTests));
}

function loadLeaderboard() {
  var userGivenTests = JSON.parse(localStorage.getItem("UsersGivenTests"));
  userGivenTests.sort((a, b) => b.marks - a.marks);
  var firstRankProfileImg = document.getElementById("first-rank-proile-img");
  var secondRankProfileImg = document.getElementById("second-rank-proile-img");
  var thirdRankProfileImg = document.getElementById("third-rank-proile-img");

  var firstRankScore = document.getElementById("first-rank-score");
  var secondRankScore = document.getElementById("second-rank-score");
  var thirdRankScore = document.getElementById("third-rank-score");

  for (
    let leaderboardUsers = 0;
    leaderboardUsers < userGivenTests.length;
    leaderboardUsers++
  ) {
    if (leaderboardUsers === 0) {
      firstRankProfileImg.src = `https://ui-avatars.com/api/?name=${userGivenTests[leaderboardUsers].fullName}`;
      firstRankScore.innerText = `${userGivenTests[0].marks}`;
    }
    if (leaderboardUsers === 1) {
      secondRankProfileImg.src = `https://ui-avatars.com/api/?name=${userGivenTests[leaderboardUsers].fullName}`;
      secondRankScore.innerText = `${userGivenTests[1].marks}`;
    }

    if (leaderboardUsers === 2) {
      thirdRankProfileImg.src = `https://ui-avatars.com/api/?name=${userGivenTests[leaderboardUsers].fullName}`;
      thirdRankScore.innerText = `${userGivenTests[2].marks}`;
    }

    if (leaderboardUsers > 2) {
      console.log("Present");
      var rankItem = document.createElement("div");
      console.log(rankItem);
      rankItem.innerHTML = `<div class="rank-item">
            <div class="rank-item__name">
              <h3>#${leaderboardUsers + 1}</h3>
              <h3>${userGivenTests[leaderboardUsers].fullName}</h3>
            </div>
            <div class="rank-item__score">
              <h3>${userGivenTests[leaderboardUsers].marks}</h3>
            </div>
          </div>`;
      document.getElementById("other-ranks-section").appendChild(rankItem);
    }
  }
}

// mainContainer.style.display = "none";
// for (let index = 0; index < totalQuestions; index++) {
//   // var correctAnswer = questions[randomNumberArray[index]].answer;
//   // if (selectedOptionsArray[index] === correctAnswer) {
//   //   marks += 10;
//   //   console.log("Running");
//   //   console.log(marks);
//   // }

//   var questionAnswerContainer = document.createElement("div");

//   questionAnswerContainer.innerHtml = `<div><h2 class="container__question" id="question"></h2>
//       <h3 class="container__selected-option"></h3>
//       <h3 class="container__correct-answer"></h3></div>`;
//   console.log(questionAnswerContainer);
// }
