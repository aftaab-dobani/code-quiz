// DOM Variable 
var startButton = document.getElementById("start-quiz");
var quoteContainer = document.getElementById("quiz");

//Javascript Variable
var arrayOfQuestions = [
        "What does HTML provide?",
        "What is a boolean?",
        "Which coding language do we not learn at GA TECH Bootcamp?",
    ];
var currentIndex = 0;




//Function Variable
function displayQuestion(){
    quoteContainer.innerHTML = "";
    var questionEl = document.createElement("h1");
    questionEl.textContent = arrayOfQuestions[currentIndex];
    quoteContainer.append(questionEl);

}

//Event Listeners
startButton.addEventListener("click", function () {
    arrayOfQuestions++;
    displayQuestion();
}); 



//Function Calls 

displayQuestion();

