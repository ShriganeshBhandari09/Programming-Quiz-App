// var questions = [
//   {
//     question: "What does HTML stand for?",
//     options: [
//       "A. HyperText Markup Language",
//       "B. Home Tool Markup Language",
//       "C. Hyperlinks and Text Markup Language",
//       "D. HyperText Media Language",
//     ],
//     answer: "A. HyperText Markup Language",
//   },
//   {
//     question: "Which HTML element is used to define the title of a document?",
//     options: ["A. <title>", "B. <head>", "C. <meta>", "D. <header>"],
//     answer: "A. <title>",
//   },
//   {
//     question: "Which CSS property is used to change the background color?",
//     options: ["A. background-color", "B. bgcolor", "C. color", "D. background"],
//     answer: "A. background-color",
//   },
//   {
//     question: "What does CSS stand for?",
//     options: [
//       "A. Creative Style Sheets",
//       "B. Cascading Style Sheets",
//       "C. Computer Style Sheets",
//       "D. Colorful Style Sheets",
//     ],
//     answer: "B. Cascading Style Sheets",
//   },
//   {
//     question: "Which property is used to change the font of an element in CSS?",
//     options: [
//       "A. font-family",
//       "B. text-style",
//       "C. font-weight",
//       "D. text-font",
//     ],
//     answer: "A. font-family",
//   },
//   {
//     question: "In JavaScript, how do you declare a variable?",
//     options: [
//       "A. let variableName",
//       "B. var variableName",
//       "C. const variableName",
//       "D. All of the above",
//     ],
//     answer: "D. All of the above",
//   },
//   {
//     question:
//       "Which method is used to write content in the HTML document using JavaScript?",
//     options: [
//       "A. document.write()",
//       "B. console.log()",
//       "C. window.write()",
//       "D. document.log()",
//     ],
//     answer: "A. document.write()",
//   },
//   {
//     question: "Which tag is used to define an unordered list in HTML?",
//     options: ["A. <ul>", "B. <ol>", "C. <li>", "D. <list>"],
//     answer: "A. <ul>",
//   },
//   {
//     question: "How do you add comments in CSS?",
//     options: [
//       "A. // comment",
//       "B. <!-- comment -->",
//       "C. /* comment */",
//       "D. # comment",
//     ],
//     answer: "C. /* comment */",
//   },
//   {
//     question: "Which HTML attribute is used to define inline styles?",
//     options: ["A. class", "B. style", "C. styles", "D. font"],
//     answer: "B. style",
//   },
//   {
//     question:
//       "Which JavaScript method is used to access an HTML element by its ID?",
//     options: [
//       "A. getElementById()",
//       "B. querySelector()",
//       "C. getElementByClass()",
//       "D. getElementByTag()",
//     ],
//     answer: "A. getElementById()",
//   },
//   {
//     question: "Which of the following is NOT a valid CSS unit?",
//     options: ["A. em", "B. px", "C. pt", "D. pxm"],
//     answer: "D. pxm",
//   },
//   {
//     question: "In HTML, which tag is used to define a hyperlink?",
//     options: ["A. <link>", "B. <a>", "C. <href>", "D. <hyper>"],
//     answer: "B. <a>",
//   },
//   {
//     question: "Which of the following is a block-level HTML element?",
//     options: ["A. <span>", "B. <div>", "C. <a>", "D. <img>"],
//     answer: "B. <div>",
//   },
//   {
//     question: "Which JavaScript keyword is used to define a function?",
//     options: ["A. define", "B. function", "C. func", "D. method"],
//     answer: "B. function",
//   },
//   {
//     question: "What does the 'this' keyword refer to in JavaScript?",
//     options: [
//       "A. The current object",
//       "B. The global object",
//       "C. The parent object",
//       "D. The next object",
//     ],
//     answer: "A. The current object",
//   },
//   {
//     question: "Which CSS property controls the text size?",
//     options: [
//       "A. font-size",
//       "B. text-size",
//       "C. font-weight",
//       "D. text-style",
//     ],
//     answer: "A. font-size",
//   },
//   {
//     question: "Which tag is used to define an image in HTML?",
//     options: ["A. <img>", "B. <image>", "C. <src>", "D. <pic>"],
//     answer: "A. <img>",
//   },
//   {
//     question:
//       "Which event is triggered when an HTML element is clicked in JavaScript?",
//     options: ["A. onmouseover", "B. onclick", "C. onsubmit", "D. onchange"],
//     answer: "B. onclick",
//   },
//   {
//     question:
//       "Which method is used to remove whitespace from the beginning and end of a string in JavaScript?",
//     options: ["A. trim()", "B. slice()", "C. substr()", "D. substring()"],
//     answer: "A. trim()",
//   },
// ];

// function storeQuestion() {
//   localStorage.setItem("questions", JSON.stringify(questions));
// }

// storeQuestion()

console.log(JSON.parse(localStorage.getItem("questions")));

var questions = JSON.parse(localStorage.getItem("questions"));

function generateQuestions() {}
