///////////////////////////////////////////////Admin Side Script//////////////////////////////////////////////////

//Load Profile Name

function logout() {
  let text = "Are you sure you want to Logout?";
  if (confirm(text) == true) {
    sessionStorage.removeItem("userLoggedIn");
    sessionStorage.removeItem("adminLoggedIn");
    window.location.assign("../index.html");
  }
}

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

function readAllQuestions() {
  generateAdminProfileName();
  let questions = JSON.parse(localStorage.getItem("questions"));

  let tableData = document.getElementById("question-table-data");
  for (
    let questionIndex = 0;
    questionIndex < questions.length;
    questionIndex++
  ) {
    var newRow = document.createElement("tr");
    newRow.id = `question-${questionIndex + 1}`;
    newRow.innerHTML += `<td class="table-content">${questionIndex + 1}</td>
      <td>${questions[questionIndex].question}</td>
      <td class="table-button"><div class="table-button-div"><button onclick="viewQuestion(${questionIndex})"><i class="fa-solid fa-eye"></i></button><button onclick="updateQuestionForm(${questionIndex})" id="update-button-${
      questionIndex + 1
    }"><i class="fa-solid fa-pencil"></i></button><button onclick="deleteQuestion(${questionIndex})" id="delete-button-${
      questionIndex + 1
    }"><i class="fa-solid fa-trash"></i></button></div></td>`;
    tableData.appendChild(newRow);
  }
}

function showAddQuestionModal() {
  document.querySelector(".overlay").classList.add("showoverlay");
  document
    .querySelector(".quiz-question-form")
    .classList.add("showquestionform");
}

function closeAddQuestionModal() {
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
  let question = document.getElementById("question");
  let optionOne = document.getElementById("option-one");
  let optionTwo = document.getElementById("option-two");
  let optionThree = document.getElementById("option-three");
  let optionFour = document.getElementById("option-four");
  let correctAnswerValue = document.getElementById("correct-answer").value;

  if (
    !question ||
    !optionOne ||
    !optionTwo ||
    !optionThree ||
    !optionFour ||
    correctAnswer === ""
  ) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Use the selected value to set the correct answer
  let correctAnswer;
  if (correctAnswerValue === "option-one") {
    correctAnswer = optionOne.value;
  } else if (correctAnswerValue === "option-two") {
    correctAnswer = optionTwo.value;
  } else if (correctAnswerValue === "option-three") {
    correctAnswer = optionThree.value;
  } else if (correctAnswerValue === "option-four") {
    correctAnswer = optionFour.value;
  } else {
    alert("Please select a valid correct answer.");
    return; // Exit the function if no valid answer is selected
  }
  console.log(correctAnswer);
  questions.push({
    question: question.value,
    // supportingText: supportingText.value,
    options: [
      optionOne.value,
      optionTwo.value,
      optionThree.value,
      optionFour.value,
    ],
    answer: correctAnswer,
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
  // explanationText.value = "";
  closeAddQuestionModal();
  location.reload();
  readAllQuestions();
}

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

function updateQuestionForm(questionIndex) {
  let questions = JSON.parse(localStorage.getItem("questions")) || [];
  let question = document.getElementById("updated-question");
  let optionOne = document.getElementById("updated-option-one");
  let optionTwo = document.getElementById("updated-option-two");
  let optionThree = document.getElementById("updated-option-three");
  let optionFour = document.getElementById("updated-option-four");
  let correctAnswer = document.getElementById("updated-correct-answer");
  let updateQuestionBtn = document.getElementById("update-question-button");
  let optionListOne = document.getElementById("option-list-one");
  let optionListTwo = document.getElementById("option-list-two");
  let optionListThree = document.getElementById("option-list-three");
  let optionListFour = document.getElementById("option-list-four");

  updateQuestionBtn.setAttribute("onclick", `updateQuestion(${questionIndex})`);
  console.log(updateQuestionBtn);

  showUpdateQuestionFormModal();

  question.value = `${questions[questionIndex].question}`;
  optionOne.value = `${questions[questionIndex].options[0]}`;
  optionTwo.value = questions[questionIndex].options[1];
  optionThree.value = questions[questionIndex].options[2];
  optionFour.value = questions[questionIndex].options[3];
  // correctAnswer.value = questions[questionIndex].answer;
  optionListOne.value = questions[questionIndex].options[0];
  optionListOne.innerText = questions[questionIndex].options[0];
  optionListTwo.value = questions[questionIndex].options[1];
  optionListTwo.innerText = questions[questionIndex].options[1];
  optionListThree.value = questions[questionIndex].options[2];
  optionListThree.innerText = questions[questionIndex].options[2];
  optionListFour.value = questions[questionIndex].options[3];
  optionListFour.innerText = questions[questionIndex].options[3];
}

function updateQuestion(questionIndex) {
  let questions = JSON.parse(localStorage.getItem("questions")) || [];
  let question = document.getElementById("updated-question");
  let optionOne = document.getElementById("updated-option-one");
  let optionTwo = document.getElementById("updated-option-two");
  let optionThree = document.getElementById("updated-option-three");
  let optionFour = document.getElementById("updated-option-four");
  let correctAnswer = document.getElementById("updated-correct-answer");
  questions.splice(questionIndex, 1, {
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

function viewQuestion(questionIndex) {
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
  question.innerText = questions[questionIndex].question;
  optionOne.innerHTML = questions[questionIndex].options[0];
  optionTwo.innerHTML = questions[questionIndex].options[1];
  optionThree.innerHTML = questions[questionIndex].options[2];
  optionFour.innerHTML = questions[questionIndex].options[3];
  correctAnswer.innerHTML = `Answer is:- ${questions[questionIndex].answer}`;
}

function deleteQuestion(questionIndex) {
  let questions = JSON.parse(localStorage.getItem("questions")) || [];
  let text = "Are you sure you want to delete the Question?";
  if (confirm(text) == true) {
    questions.splice(questionIndex, 1);
    localStorage.setItem("questions", JSON.stringify(questions));
    alert("Deleted Question Successfull");
    location.reload();
  }
}

function readAllUsers() {
  generateAdminProfileName();
  let userGivenTests = JSON.parse(localStorage.getItem("usersGivenTests"));
  let tableData = document.getElementById("user-table-data");

  for (let userIndex = 0; userIndex < userGivenTests.length; userIndex++) {
    var newRow = document.createElement("tr");
    newRow.innerHTML += `<td>${userIndex + 1}</td>
      <td>${userGivenTests[userIndex].fullName}</td>
      <td class="options">${userGivenTests[userIndex].email}</td>
      <td>${userGivenTests[userIndex].noOfTimeTestGiven}</td>
      <td>${userGivenTests[userIndex].marks}</td>
      <td class="table-button"><div class="table-button-div"><a href="users-history.html?index=${userIndex}&name=${encodeURIComponent(
      userGivenTests[userIndex].fullName
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

function loadUserTestDetails() {
  generateAdminProfileName();
  let { index, name } = getQueryParams();
  generateAdminProfileName();
  let usersGivenTests = JSON.parse(localStorage.getItem("usersGivenTests"));
  let userGivenTests = JSON.parse(localStorage.getItem("usersGivenTests"));
  document.getElementById(
    "user-name"
  ).innerText = `${name} | ${usersGivenTests[index].email}`;

  let tableData = document.getElementById("user-test-table-data");
  let userTests = userGivenTests[index].tests;
  for (
    let userTestIndex = 0;
    userTestIndex < userTests.length;
    userTestIndex++
  ) {
    var newRow = document.createElement("tr");
    newRow.innerHTML += `<td>${userTests[userTestIndex].testNo}</td>
      <td>${userTests[userTestIndex].date}</td>
      <td class="options">${userTests[userTestIndex].marks}</td>
      <td>${userTests[userTestIndex].correctAnswers}</td>
      <td class="table-button"><div class="table-button-div"><a href="user-testlist.html?testIndex=${userTestIndex}&name=${userGivenTests[index].fullName}">
            View Test
          </a></div></td>`;
    tableData.appendChild(newRow);
  }
}

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
      <div class="option"><p>4. ${userAnswer.options[3]}<span><i class="fa-solid icon"></i></span></p></div>
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
