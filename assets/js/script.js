///////////////
//Elements////
//////////////
var startButtonEl = document.getElementById('start-button');
var submitButtonEl = document.getElementById('submit-button');
var timerEl = document.getElementById('timer');
var questionScreenEl = document.getElementById('questions-screen');
var questionChoicesEl = document.getElementById('question-choices');
var tagEl = document.getElementById('tag');

//////////////
//Questions///
/////////////
var quiz = [
  {
    question: "What does HTML stand for?",
    answers: ["Heavy Text Masking Language", "Hyper Text Markup Language", "Hungry Tigers Meet-for Lunch", "Hyper Taxis Maneuvering Logically"],
    correct: "Hyper Text Markup Language",
  },
  {
  question: "Do all HTML tags have an end tag?",
  answers: ["True", "False"],
  correct: "True",
  },
  {
  question: "How can we select an element with a specific ID in CSS?",
  answers: ["#", ".", "!", "None of the above"],
  correct: "#",
  },
];

console.log(quiz)

//////////////
//Variables//
/////////////
var quizQuestionIndex = 0;
var timerID;
var time = quiz.length * 20;

//////////////
//Main Logic//
//////////////

function quizStartButton(){
  var mainScreenEL = document.getElementById('main-screen');
  mainScreenEL.setAttribute('class', 'not-shown');
  questionScreenEl.removeAttribute('class');

  // timerId = setInterval(clockTick, 1000);
  // timerEl.textContent = time;

  startQuestions
}

function startQuestions(){
  var firstQuestion = quiz[quizQuestionIndex];
  var headerEl = document.getElementById('question-header');
  headerEl.textContent = firstQuestion.question;

  questionChoicesEl.innerHTML= "";

  for (var i = 0; i < firstQuestion.answers.length; i++) {
    var eachAnswers = firstQuestion.answers[i];
    var answersButton = document.createElement('button');
    answersButton.setAttribute('class', 'eachAnswers');
    answersButton.setAttribute('value', eachAnswers);
    answersButton.textContent = i + 1 + ". " + eachAnswers;
    questionChoicesEl.appendChild(answersButton)
  }
}

startButtonEl.addEventListener('click', quizStartButton);