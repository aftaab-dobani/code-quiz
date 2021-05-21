// DOM Variable
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials");

//Javascript Variable
//array of objects for the questions
var questions = [
  {
    title: "What does HTML provide?",
    choices: ["Structure and Content", "Style", "Backend Development"],
    answer: "Structure and Content",
  },
  {
    title: "What is a boolean?",
    choices: ["String", "True/False", "Integers"],
    answer: "String",
  },
  {
    title: "Which coding language do we not learn in class?",
    choices: ["Javascript", "CSS", "Python"],
    answer: "Python",
  },
];


//Function Variable
function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function(choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    choiceNode.onclick = questionClick;
    choicesEl.appendChild(choiceNode);
  });
}


 

//Event Listeners
startButton.addEventListener("click", function () {
  displayQuestions();
});

//Function Calls

displayQuestion();
