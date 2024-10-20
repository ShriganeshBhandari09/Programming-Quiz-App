var questions = [
  {
    question: "What does HTML stand for?",
    supportingText:
      "HTML is the standard markup language used to create web pages.",
    options: [
      "Hyper Text Markup Language",
      "High-Level Text Markup Language",
      "Hyperlink and Text Markup Language",
      "Hyper Text Multiple Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which of the following is a valid CSS selector?",
    supportingText:
      "CSS selectors are used to select the elements you want to style.",
    options: ["#header", ".className", "div", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which HTML element is used to define an internal style sheet?",
    supportingText:
      "An internal style sheet is defined within the <head> section of an HTML document.",
    options: ["<style>", "<css>", "<script>", "<styles>"],
    answer: "<style>",
  },
  {
    question:
      "In JavaScript, which method is used to access an HTML element by its id?",
    supportingText:
      "This method allows you to manipulate an element's properties in your JavaScript code.",
    options: [
      "getElementById()",
      "getElementsByClassName()",
      "querySelector()",
      "getElementByTagName()",
    ],
    answer: "getElementById()",
  },
  {
    question: "Which property is used to change the background color in CSS?",
    supportingText:
      "This property allows you to set a color behind an element.",
    options: ["color", "bgcolor", "background-color", "background"],
    answer: "background-color",
  },
  {
    question: "What is the purpose of the <meta> tag in HTML?",
    supportingText:
      "The <meta> tag is used to provide metadata about the HTML document, like descriptions and keywords.",
    options: [
      "To provide metadata about the HTML document",
      "To include JavaScript files",
      "To link CSS files",
      "To create links to other pages",
    ],
    answer: "To provide metadata about the HTML document",
  },
  {
    question: "Which JavaScript method is used to parse a string as JSON?",
    supportingText:
      "This method converts a JSON string into a JavaScript object.",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.decode()",
    ],
    answer: "JSON.parse()",
  },
  {
    question: "What is the default value of the position property in CSS?",
    supportingText:
      "This property determines how an element is positioned in a document.",
    options: ["static", "relative", "absolute", "fixed"],
    answer: "static",
  },
  {
    question:
      "Which of the following is used to select elements with a specific class in CSS?",
    supportingText:
      "Class selectors are used to apply styles to multiple elements with the same class.",
    options: ["#classname", ".classname", "classname", "classname()"],
    answer: ".classname",
  },
  {
    question: "How do you create a function in JavaScript?",
    supportingText:
      "Functions are reusable blocks of code that perform a specific task.",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "create myFunction()",
      "function:myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "What does CSS stand for?",
    supportingText:
      "CSS is essential for styling web pages, allowing for visual layout and design.",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    supportingText: "This attribute improves accessibility and helps with SEO.",
    options: ["src", "title", "alt", "longdesc"],
    answer: "alt",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    supportingText:
      "This element is often used to format text and create spacing.",
    options: ["<break>", "<br>", "<lb>", "<linebreak>"],
    answer: "<br>",
  },
  {
    question: "Which property is used to set the font size in CSS?",
    supportingText:
      "This property affects the size of the text displayed in an element.",
    options: ["text-size", "font-size", "font-style", "text-style"],
    answer: "font-size",
  },
  {
    question:
      "What is the correct way to refer to an external script called 'script.js' in HTML?",
    supportingText:
      "External scripts are linked in the HTML document to enhance functionality.",
    options: [
      "<script src='script.js'>",
      "<script href='script.js'>",
      "<script link='script.js'>",
      "<script file='script.js'>",
    ],
    answer: "<script src='script.js'>",
  },
  {
    question: "Which JavaScript keyword is used to declare a variable?",
    supportingText: "These keywords are used to store data values.",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What does the 'display' property in CSS control?",
    supportingText:
      "The display property determines how elements are displayed on the webpage.",
    options: [
      "How an element is displayed on the page",
      "The size of an element",
      "The color of an element",
      "The position of an element",
    ],
    answer: "How an element is displayed on the page",
  },
  {
    question: "Which of the following is not a valid HTML5 element?",
    supportingText:
      "HTML5 introduced many new elements, but some old elements are deprecated.",
    options: ["<header>", "<footer>", "<section>", "<font>"],
    answer: "<font>",
  },
  {
    question:
      "What will the following JavaScript code output? console.log(typeof NaN);",
    supportingText:
      "Understanding the type of different values is crucial in JavaScript.",
    options: ["number", "NaN", "undefined", "string"],
    answer: "number",
  },
  {
    question: "What is the purpose of the 'z-index' property in CSS?",
    supportingText:
      "The z-index property controls the stack order of overlapping elements.",
    options: [
      "To control the stacking order of elements",
      "To set the opacity of elements",
      "To change the size of elements",
      "To control the visibility of elements",
    ],
    answer: "To control the stacking order of elements",
  },
];

function storeQuestion() {
  localStorage.setItem("questions", JSON.stringify(questions));
}
storeQuestion();

console.log("Runnng Load Questions Script");

console.log(JSON.parse(localStorage.getItem("questions")));

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

// var questionId = 0;
totalQuestions = questions.length;
var slider = document.getElementById("rangeSliderValue");
var maxSliderValue = 100;
var sliderValue = maxSliderValue / totalQuestions;
console.log(sliderValue);
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
    console.log("Else is running");
  }
}
console.log(sliderValueArray);

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

function loadQuestion() {
  questionheading.innerText = `Question ${
    questionIndex + 1
  } of ${totalQuestions}`;
  question.innerText = `${questionIndex + 1}.${
    questions[randomNumberArray[questionIndex]].question
  }`;

  questionDescription.innerText =
    questions[randomNumberArray[questionIndex]].supportingText;
  optionOne.value = questions[randomNumberArray[questionIndex]].options[0];
  optionTwo.value = questions[randomNumberArray[questionIndex]].options[1];
  optionThree.value = questions[randomNumberArray[questionIndex]].options[2];
  optionfour.value = questions[randomNumberArray[questionIndex]].options[3];

  labelOne.innerText = `A. ${
    questions[randomNumberArray[questionIndex]].options[0]
  }`;
  labelTwo.innerText = `B. ${
    questions[randomNumberArray[questionIndex]].options[1]
  }`;
  labelThree.innerText = `C. ${
    questions[randomNumberArray[questionIndex]].options[2]
  }`;
  labelFour.innerText = `D. ${
    questions[randomNumberArray[questionIndex]].options[3]
  }`;
  previousBtn.style.visibility = "hidden";
  slider.style.width = `${sliderValueArray[questionIndex]}%`;
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
    questionheading.innerText = "Last Question";
    submitBtn.innerHTML = `Submit <i class="fa-solid fa-arrow-right"></i>`;
  } else {
    questionheading.innerText = `Question ${
      questionIndex + 1
    } of ${totalQuestions}`;
  }
  console.log(questionIndex);
  console.log(questions[randomNumberArray[questionIndex]]);
  question.innerText = `${questionIndex + 1}.${
    questions[randomNumberArray[questionIndex]].question
  }`;
  questionDescription.innerText =
    questions[randomNumberArray[questionIndex]].supportingText;
  optionOne.value = questions[randomNumberArray[questionIndex]].options[0];
  optionTwo.value = questions[randomNumberArray[questionIndex]].options[1];
  optionThree.value = questions[randomNumberArray[questionIndex]].options[2];
  optionfour.value = questions[randomNumberArray[questionIndex]].options[3];

  labelOne.innerText = questions[randomNumberArray[questionIndex]].options[0];
  labelOne.innerText = `A. ${
    questions[randomNumberArray[questionIndex]].options[0]
  }`;
  labelTwo.innerText = `B. ${
    questions[randomNumberArray[questionIndex]].options[1]
  }`;
  labelThree.innerText = `C. ${
    questions[randomNumberArray[questionIndex]].options[2]
  }`;
  labelFour.innerText = `D. ${
    questions[randomNumberArray[questionIndex]].options[3]
  }`;
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
  console.log(questionIndex);
  question.innerText = `${questionIndex + 1}.${
    questions[randomNumberArray[questionIndex]].question
  }`;
  questionDescription.innerText =
    questions[randomNumberArray[questionIndex]].supportingText;
  optionOne.value = questions[randomNumberArray[questionIndex]].options[0];
  optionTwo.value = questions[randomNumberArray[questionIndex]].options[1];
  optionThree.value = questions[randomNumberArray[questionIndex]].options[2];
  optionfour.value = questions[randomNumberArray[questionIndex]].options[3];

  labelOne.innerText = `A. ${
    questions[randomNumberArray[questionIndex]].options[0]
  }`;
  labelTwo.innerText = `B. ${
    questions[randomNumberArray[questionIndex]].options[1]
  }`;
  labelThree.innerText = `C. ${
    questions[randomNumberArray[questionIndex]].options[2]
  }`;
  labelFour.innerText = `D. ${
    questions[randomNumberArray[questionIndex]].options[3]
  }`;
  console.log(questions[randomNumberArray[questionIndex]]);
  slider.style.width = `${sliderValueArray[questionIndex]}%`;
}

selectedQuestionid = 1;
var selectedOptionsArray = [];
function compareAns() {
  var selectedOption = document.querySelector('input[name="options"]:checked');
  if (selectedQuestionid === questions.length) {
    selectedOptionsArray.push(selectedOption.value);
    selectedOption.checked = false;
    console.log(selectedOptionsArray);
    calculateMarks();
  } else {
    if (!selectedOption) {
      alert("please select the answer");
    } else {
      selectedOptionsArray.push(selectedOption.value);
      selectedOption.checked = false;
      console.log(selectedOptionsArray);
      nextQuestion();
      selectedQuestionid++;
    }
  }
}

var marks = 0;
var marksHeading = document.getElementById("marks");
function calculateMarks() {
  mainContainer.style.display = "none";
  for (let index = 0; index < selectedOptionsArray.length; index++) {
    var correctAnswer = questions[randomNumberArray[index]].answer;
    if (selectedOptionsArray[index] === correctAnswer) {
      marks++;
      console.log("Running");
      console.log(marks);
      marksHeading.innerText = `You scored ${marks} out of ${questions.length}`;
    }
  }
}
