// create arrays containing the questions and answers
var questions = [
    {Question1: "What is the meaning of life?",
    Answer1: "Be Happy",    
    Answer2: "Be Rich",
    Answer3: "Be Famous",
    Answer4: "Be Alone",
    Correct: 1
    },

    {Question1: "What is the meaning of happy?",
    Answer1: "Loving others",    
    Answer2: "Loving your posessions",
    Answer3: "loving yourself",
    Answer4: "Loving your job",
    Correct: 3
    }
];

// declare global variables
var seeScoresEl = document.querySelector(".see-scores");
var timerDisplayEl = document.querySelector(".timer-display");
var startBtnEl = document.querySelector(".start-btn");
var answerListEl = document.querySelector(".answer-list");
var quizHeadEl = document.querySelector(".quiz-head");
var rightWrongMsgEl = document.querySelector(".wrong-right-msg")
// cdeclare function for starting the quiz
//console.log(seeScoresEl, timerDisplayEl, startBtnEl, answerListEl, quizHeadEl, rightWrongMsgEl);

var startQuiz = function() {startBtnEl.addEventListener("click", function (){
    startBtnEl.remove();

    // for loop to display all the questions
    for (var i = 0, i < questions.length; i++){

    } //end of for loop


});
}  // end of startQuiz fn

startQuiz()