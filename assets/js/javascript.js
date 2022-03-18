// declare global variables
var seeScoresEl = document.querySelector(".see-scores");
var timerDisplayEl = document.querySelector(".timer-display");
var startBtnEl = document.querySelector(".start-btn");
var answerListEl = document.querySelector(".answer-list");
var quizHeadEl = document.querySelector(".quiz-head");
var rightWrongMsgEl = document.querySelector(".wrong-right-msg");

var quizTitleEl = document.querySelector(".quiz-title");

var answerOneEl = document.querySelector("#answer1");
var answerTwoEl = document.querySelector("#answer2");
var answerThreeEl = document.querySelector("#answer3");
var answerFourEl = document.querySelector("#answer4");


// create arrays containing the questions and answers
var questions = ["What is the scientific name of a wolf?", 
                "Which mammal has no vocal cords?",
                "What is a female donkey called?",
                "What is the fastest land animal in the world?",
                ];

var answers = {
    1: ["Canis lupus",
                "Rocky Wolf",
                "Wolfus Amadeus",
                "Wolfverine"],
    
    2: ["Howling Monkey",
                "Songbird",
                "Giraffe",
                "Dolfin"],                        

    3:["A shedonkey",
                "A Lady Donkey",
                "Donkey Bonnie",
                "A Jenny"],  

    4: ["The Turtle",
                "The Elephant",
                "The Snake",
                "The cheetah"],  
    };





answerListEl.addEventListener("click", loopThroughQuestions);




//loop through questions
var loopThroughQuestions = function(event){

    var answereClicked = event.target

    if (answereClicked.matches(".answer")) {
        console.log("an answer was cliked")
    }

} //end of loopThroughQuestions


//setting up the question, feeding their index number
var showQuestions = function (questionNum, answerNum){
    startBtnEl.textContent = "Next Question"

    //set the first question
    quizTitleEl.className = "quiz-title"
    quizTitleEl.textContent = questions[questionNum];
    //set the first set of answers
    answerOneEl.textContent = answers[answerNum][0];
    answerTwoEl.textContent = answers[answerNum][1];
    answerThreeEl.textContent = answers[answerNum][2];
    answerFourEl.textContent = answers[answerNum][3];

}

// event listener for the estar button
startBtnEl.addEventListener("click", 
function(){
showQuestions(1, 1)
});

//event listener when an aswer is clicked
answerListEl.addEventListener("click", function (){
    var answerClicked = event.target
    var answerClass = answerClicked.getAttribute("class") 

    if(answerClass === "answer"){
        console.log(answerClass);
    }else {
        console.log("no answer clicked");
    }
}
);


