// DOM Variable 
var startButton = document.getElementById("start-quiz");
var quoteContainer = document.getElementById("quiz");

//Javascript Variable
//array of objects for the questions
var arrayOfQuestions = [
    {
        question: "What does HTML provide?",
        choice: {
            A:"Structure and Content", 
            B: "Style", 
            C:"Backend Development",
        },
        answer: "Structure and Content"
    },
    {
        question: "What is a boolean?",
        choices: {
            A: "String", 
            B: "True/False", 
            C: "Integers",
        },
        answer: "String",
    },
    {
        question:  "Which coding language do we not learn at GA TECH Bootcamp?",
        choices: {
            A:"Javascript", 
            B:"CSS",
            C:"Python",
        },
        answer: "Python",
    }
   
]
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
   currentIndex++;
    displayQuestion();
}); 




//Function Calls 

displayQuestion();

