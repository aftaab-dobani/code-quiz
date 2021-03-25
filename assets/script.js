// DOM Variable
var startButton = document.getElementById("start-quiz");
var quoteContainer = document.getElementById("quiz");

//Javascript Variable
//array of objects for the questions
var Questions = [
  {
    question: "What does HTML provide?",
    choice: ["Structure and Content", "Style", "Backend Development"],
    answer: "Structure and Content",
  },
  {
    question: "What is a boolean?",
    choice: ["String", "True/False", "Integers"],
    answer: "String",
  },
  {
    question: "Which coding language do we not learn in class?",
    choice: ["Javascript", "CSS", "Python"],
    answer: "Python",
  },
];
var currentIndex = 2;
var currentChoice = 2;

//Function Variable
function displayQuestion() {
  quoteContainer.innerHTML = "";
  var questionEl = document.createElement("h1");
  questionEl.textContent = Questions[currentIndex].question;
  quoteContainer.append(questionEl);

  function displayChoices() {
    quoteContainer.innerHTML = "";
    var choiceEl = document.createElement("h2");
    choiceEl.textContent = Questions[currentChoice].choice;
    quoteContainer.append(quoteEl);
  }
}

//Event Listeners
startButton.addEventListener("click", function () {
  displayQuestions();
});

//Function Calls

displayQuestion();
