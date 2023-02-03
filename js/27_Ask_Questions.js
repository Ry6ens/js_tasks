//Input Data JSON
const myQuestions = [
  {
    question: "What is your marital status?",
    answers: {
      a: "Single",
      b: "Married",
    },
    visible: true,
  },
  {
    question: "Are you planning on getting married next year?",
    answers: {
      a: "Yes",
      b: "No",
    },
    visible: false,
  },
  {
    question: "How long have you been married?",
    answers: {
      a: "Less than a year",
      b: "More than a year",
    },
    visible: false,
  },
  {
    question: "Have you celebrated your one year anniversary?",
    answers: {
      a: "Yes",
      b: "No",
    },
    visible: false,
  },
];

const result = { paths: { number: 0, list: [] } };

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("wrapper");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;

//Build quiz HTML
function buildQuiz() {
  const question = [];
  const answers = [];

  const currentQuizData = myQuestions[currentQuiz];

  const keysAnswers = Object.entries(currentQuizData.answers);

  keysAnswers.forEach(([key, value]) => {
    answers.push(
      `<label>
              <input type="radio" name="question" class="answer" value="${value}">
              ${key} :
              ${value}
            </label>`
    );
  });

  question.push(
    `<div class="question" > ${currentQuizData.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
  );

  quizContainer.innerHTML = question.join("");
}

//Selected answer
function getSelected() {
  const answerEls = document.querySelectorAll(".answer");

  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.value;
    }
  });

  return answer;
}

//Show result quiz
function resultShow() {
  const resultShowJSON = JSON.stringify(result);

  const resultInfo = `
  <div >
    <p class="result">Done</p>
    <p class="result-json">${resultShowJSON}</p>
  </div>`;

  resultsContainer.innerHTML = resultInfo;

  console.log(result);
}

//Click button NEXT
function handleClickAnswers(e) {
  const questionEl = document.querySelector(".question");

  const answer = getSelected();

  const resultObj = { [questionEl.textContent]: answer };

  if (answer === "Single") {
    result.paths.number++;
    result.paths.list.push(resultObj);
    currentQuiz = 1;
    buildQuiz();
  }

  if (answer === "Yes") {
    result.paths.number++;
    result.paths.list.push(resultObj);
    resultShow();
  }

  if (answer === "No") {
    result.paths.number++;
    result.paths.list.push(resultObj);
    resultShow();
  }

  if (answer === "Married") {
    result.paths.number++;
    result.paths.list.push(resultObj);
    currentQuiz = 2;
    buildQuiz();
  }

  if (answer === "Less than a year") {
    result.paths.number++;
    result.paths.list.push(resultObj);
    resultShow();
  }

  if (answer === "More than a year") {
    result.paths.number++;
    result.paths.list.push(resultObj);
    currentQuiz = 3;
    buildQuiz();
  }
}

// Start quiz
buildQuiz();

submitButton.addEventListener("click", handleClickAnswers);
