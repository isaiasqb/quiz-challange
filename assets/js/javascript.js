// create arrays containing the questions and answers
var questions = {
    questions: ["What is the scientific name of a wolf?", 
                "Which mammal has no vocal cords?",
                "What is a female donkey called?",
                "What is the fastest land animal in the world?",
            ]};

var answers = {
    first: [
        "Canis lupus",
        "Rocky Wolf",
        "Wolfus Amadeus",
        "Wolfverine", 
        firstAnswers:        
    ],
    second: [
        "Howling Monkey",
        "Songbird",
        "Giraffe",
        "Dolfin",
    ],
    third: [
        "A shedonkey",
        "A Lady Donkey",
        "Donkey Bonnie",
        "A Jenny",
    ],
    fourth: [
        "The Turtle",
        "The Elephant",
        "The Snake",
        "The cheetah",
    ],
    firtsAnswers: function answers5 (){
        var answerEl = document.createElement("li");
        answerEl.className = "answer"
        answerEl.textContent = answers.q.q;
        // answerListEl.appendChild(answerEl);
        answerListEl.innerHTML.replace(answerEl)

    }
};

// Answer1: Canis lupus
// Answer2: Giraffe
// Answer3: A Jenny
// Answer4: The cheetah
// Answer5: 22 months"

// declare global variables
var seeScoresEl = document.querySelector(".see-scores");
var timerDisplayEl = document.querySelector(".timer-display");
var startBtnEl = document.querySelector(".start-btn");
var answerListEl = document.querySelector(".answer-list");
var quizHeadEl = document.querySelector(".quiz-head");
var rightWrongMsgEl = document.querySelector(".wrong-right-msg")


answerListEl.addEventListener("click", loopThroughQuestions);




//loop through questions
var loopThroughQuestions = function(event){

    var answereClicked = event.target

    if (answereClicked.matches(".answer")) {
        console.log("an answer was cliked")
    }

} //end of loopThroughQuestions



var q = 0
// event listener for the estar button
startBtnEl.addEventListener("click", function (){

    

            startBtnEl.textContent = "Next Question"

            //set the first question
            var questionTitleEl = document.createElement("h1");
            questionTitleEl.className = "quiz-title"
            questionTitleEl.textContent = questions.questions[q];
            quizHeadEl.appendChild(questionTitleEl);

            
            q++



            for (var i = 0; i < questions.questions.length; i++){
            //create the answers for each question and append it to the quiz head
            var answerEl = document.createElement("li");
            answerEl.className = "answer"
            answerEl.textContent = answers.q.q;
            // answerListEl.appendChild(answerEl);
            answerListEl.innerHTML.replace(answerEl)
        }
    
});


//event listener when an aswer is clicked
answerListEl.addEventListener("click", function (event){
    var answerClicked = event.target
    var answerClass = answerClicked.getAttribute("class") 

    if(answerClass === "answer"){
        console.log(answerClass);
    }else {
        console.log("no answer clicked");
    }
}
);