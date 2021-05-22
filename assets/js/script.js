//Quiz State Variables 
var currentQuestionIndex = 0;
var time = questions.length * 15; 
var timerId;

//Dom Elements 
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials");
var timerEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

//Javascript Variable
//array of objects for the questions



//Function Variable
function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
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

// function questionClick() {
//   if (this.value !== questions[currentQuestionIndex].answer) {

//   }
// }

function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 15;
    if (time < 0) {
      time = 0;
    }

    timerEl.textContent = time;
    feedbackEl.textContent = "Wrong!";
  } else {
      
      feedbackEl.textContent = "Correct!";
    }

    //share wrong or correct
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000); 

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
      quizEnd();

    } else {
      getQuestion();
    }
  
}

// end the quiz 
function quizEnd() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    quizEnd();
  }
}

// save the highscore
function saveHighscore() {
  var initials = initialsEl.value.trim();
  if (initials !== "") {
    var highscores = 
    JSON.parse(window.localStorage.getItem("highscores")) || []; 

    var newScore = {
      score:time, 
      initials: initials
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.href = "highscores.html";
  }
}


 

//Event Listeners
startButton.addEventListener("click", function () {
  displayQuestions();
});

//Function Calls

displayQuestion();
