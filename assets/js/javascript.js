var generalScore = 0
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
    0: ["Canis lupus",
                "Rocky Wolf",
                "Wolfus Amadeus",
                "Wolfverine"],
    
    1: ["Howling Monkey",
                "Songbird",
                "Giraffe",
                "Dolfin"],                        

    2:["A shedonkey",
                "A Lady Donkey",
                "Donkey Bonnie",
                "A Jenny"],  

    3: ["The Turtle",
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


// event listener for the estar button
startBtnEl.addEventListener("click", function(){
        
    showQuestions(0, 0)
    startBtnEl.className = "hide"

});


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

var countClick = 0
//event listener when an aswer is clicked
answerListEl.addEventListener("click", function (event){
    var answerClicked = event.target
    var answerClass = answerClicked.getAttribute("class")
    var answerText =  answerClicked.textContent
    countClick +=1  

    if(answerClass === "answer"){
        console.log("answer was clicked" + countClick)
        showQuestions(countClick, countClick)
    }else {
        console.log("no answer clicked");
    }

    if (answerText === "Canis lupus" || answerText === "Giraffe" || answerText === "A Jenny" || answerText === "The cheetah"  ){
    console.log("correct!")
};

    if(countClick > questions.length){
        answerListEl.className = "hide"
    }
});







