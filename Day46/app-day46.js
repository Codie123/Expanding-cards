const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
const questionEl = document.getElementById("question");
const container = document.querySelector(".container");
const answerEl = document.querySelectorAll(".answer");
const a_label = document.getElementById("a_label");
const b_label = document.getElementById("b_label");
const c_label = document.getElementById("c_label");
const d_label = document.getElementById("d_label");

const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

generateQuiz();
function generateQuiz() {
  deselect();
  let quiz = quizData[currentQuiz];
  questionEl.innerText = quiz.question;
  a_label.innerText = quiz.a;
  b_label.innerText = quiz.b;
  c_label.innerText = quiz.c;
  d_label.innerText = quiz.d;
}

function deselect() {
  answerEl.forEach((x) => {
    x.checked = false;
  });
}

function getAnswer() {
  let answer;
  answerEl.forEach((x) => {
    if (x.checked) {
      answer = x.id;
    }
  });
  return answer;
}

submit.addEventListener("click", () => {
  let userAnswer = getAnswer();
  if (userAnswer) {
    if (userAnswer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      generateQuiz();
    } else {
      container.innerHTML = `<h1>You answered ${score}/4 question correctly
        <button class="btn" onclick = location.reload()>Reload</button>
      `;
    }
  }
});
