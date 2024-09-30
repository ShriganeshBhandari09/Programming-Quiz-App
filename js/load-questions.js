var questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "A. HyperText Markup Language",
      "B. Home Tool Markup Language",
      "C. Hyperlinks and Text Markup Language",
      "D. HyperText Media Language",
    ],
    answer: "A. HyperText Markup Language",
  },
  {
    question: "Which HTML element is used to define the title of a document?",
    options: ["A. <title>", "B. <head>", "C. <meta>", "D. <header>"],
    answer: "A. <title>",
  },
  {
    question: "Which CSS property is used to change the background color?",
    options: ["A. background-color", "B. bgcolor", "C. color", "D. background"],
    answer: "A. background-color",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "A. Creative Style Sheets",
      "B. Cascading Style Sheets",
      "C. Computer Style Sheets",
      "D. Colorful Style Sheets",
    ],
    answer: "B. Cascading Style Sheets",
  },
  {
    question: "Which property is used to change the font of an element in CSS?",
    options: [
      "A. font-family",
      "B. text-style",
      "C. font-weight",
      "D. text-font",
    ],
    answer: "A. font-family",
  },
  {
    question: "In JavaScript, how do you declare a variable?",
    options: [
      "A. let variableName",
      "B. var variableName",
      "C. const variableName",
      "D. All of the above",
    ],
    answer: "D. All of the above",
  },
  {
    question:
      "Which method is used to write content in the HTML document using JavaScript?",
    options: [
      "A. document.write()",
      "B. console.log()",
      "C. window.write()",
      "D. document.log()",
    ],
    answer: "A. document.write()",
  },
  {
    question: "Which tag is used to define an unordered list in HTML?",
    options: ["A. <ul>", "B. <ol>", "C. <li>", "D. <list>"],
    answer: "A. <ul>",
  },
  {
    question: "How do you add comments in CSS?",
    options: [
      "A. // comment",
      "B. <!-- comment -->",
      "C. /* comment */",
      "D. # comment",
    ],
    answer: "C. /* comment */",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["A. class", "B. style", "C. styles", "D. font"],
    answer: "B. style",
  },
  {
    question:
      "Which JavaScript method is used to access an HTML element by its ID?",
    options: [
      "A. getElementById()",
      "B. querySelector()",
      "C. getElementByClass()",
      "D. getElementByTag()",
    ],
    answer: "A. getElementById()",
  },
  {
    question: "Which of the following is NOT a valid CSS unit?",
    options: ["A. em", "B. px", "C. pt", "D. pxm"],
    answer: "D. pxm",
  },
  {
    question: "In HTML, which tag is used to define a hyperlink?",
    options: ["A. <link>", "B. <a>", "C. <href>", "D. <hyper>"],
    answer: "B. <a>",
  },
  {
    question: "Which of the following is a block-level HTML element?",
    options: ["A. <span>", "B. <div>", "C. <a>", "D. <img>"],
    answer: "B. <div>",
  },
  {
    question: "Which JavaScript keyword is used to define a function?",
    options: ["A. define", "B. function", "C. func", "D. method"],
    answer: "B. function",
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "A. The current object",
      "B. The global object",
      "C. The parent object",
      "D. The next object",
    ],
    answer: "A. The current object",
  },
  {
    question: "Which CSS property controls the text size?",
    options: [
      "A. font-size",
      "B. text-size",
      "C. font-weight",
      "D. text-style",
    ],
    answer: "A. font-size",
  },
  {
    question: "Which tag is used to define an image in HTML?",
    options: ["A. <img>", "B. <image>", "C. <src>", "D. <pic>"],
    answer: "A. <img>",
  },
  {
    question:
      "Which event is triggered when an HTML element is clicked in JavaScript?",
    options: ["A. onmouseover", "B. onclick", "C. onsubmit", "D. onchange"],
    answer: "B. onclick",
  },
  {
    question:
      "Which method is used to remove whitespace from the beginning and end of a string in JavaScript?",
    options: ["A. trim()", "B. slice()", "C. substr()", "D. substring()"],
    answer: "A. trim()",
  },
];

function storeQuestion() {
  localStorage.setItem("questions", JSON.stringify(questions));
}

storeQuestion()
console.log("Runnng Load Questions Script");
console.log(JSON.parse(localStorage.getItem("questions")));

var questions = JSON.parse(localStorage.getItem("questions"));

var question = document.getElementById("question");
var currntQuestion = document.getElementById("currentQuestion");
var totalQuestions = document.getElementById("totalQuestions");
var questionheading = document.getElementById("question-heading");
var mainContainer = document.getElementById("main-container");

var optionOne = document.getElementById("option-one");
var optionTwo = document.getElementById("option-two");
var optionThree = document.getElementById("option-three");
var optionfour = document.getElementById("option-four");

var labelOne = document.getElementById("label-one");
var labelTwo = document.getElementById("label-two");
var labelThree = document.getElementById("label-three");
var labelFour = document.getElementById("label-four");

var submitBtn = document.getElementById("forward-btn");

var questionId = 0;
totalQuestions = questions.length;
var slider = document.getElementById("rangeSliderValue");
var maxSliderValue = 100;
var sliderValue = maxSliderValue / totalQuestions;

console.log(sliderValue);
slider.style.width = `${sliderValue}%`;
function increaseSliderValue() {
  sliderValue = sliderValue + maxSliderValue / totalQuestions;
  if (sliderValue > 100) {
    sliderValue = 100;
    alert("Maximum Value Reached");
  }
  slider.style.width = `${sliderValue}%`;
  console.log(slider.style.width);
}

function generateQuestions() {
  if (questionId === questions.length - 1) {
    questionheading.innerText = "Last Question";
  } else {
    questionheading.innerText = `Question ${
      questionId + 1
    } of ${totalQuestions}`;
  }

  question.innerText = `${questionId + 1}.${questions[questionId].question}`;
  optionOne.value = questions[questionId].options[0];
  optionTwo.value = questions[questionId].options[1];
  optionThree.value = questions[questionId].options[2];
  optionfour.value = questions[questionId].options[3];

  labelOne.innerText = questions[questionId].options[0];
  labelTwo.innerText = questions[questionId].options[1];
  labelThree.innerText = questions[questionId].options[2];
  labelFour.innerText = questions[questionId].options[3];
  questionId++;
  console.log("question id", questionId);
}

selectedQuestionid = 1;
var selectedOptionsArray = [];
function compareAns() {
  var selectedOption = document.querySelector('input[name="options"]:checked');
  if (selectedQuestionid === questions.length) {
    selectedOptionsArray.push(selectedOption.value);
    selectedOption.checked = false;
    console.log(selectedOptionsArray);
    calculateMarks()
  } else {
    if (!selectedOption) {
      alert("please select the answer");
    } else {
      selectedOptionsArray.push(selectedOption.value);
      selectedOption.checked = false;
      console.log(selectedOptionsArray);
      generateQuestions();
      increaseSliderValue();
      selectedQuestionid++;
    }
  }
  console.log("The question id is", questionId);
  console.log("The answer id is", selectedQuestionid);
  console.log(" The array is", selectedOptionsArray);
}

var marks = 0;

var marksHeading = document.getElementById("marks");
function calculateMarks() {
  mainContainer.style.display = "none";
  for (let index = 0; index < selectedOptionsArray.length; index++) {
    var correctAnswer = questions[index].answer;
    if (selectedOptionsArray[index] === correctAnswer) {
      marks++;
      console.log("Running");
      console.log(marks);
      marksHeading.innerText = `You scored ${marks} out of ${questions.length}`;
    }
  }
}
