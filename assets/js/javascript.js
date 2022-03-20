var generalScore = 0
// declare global variables
var questionNumberEl = document.querySelector(".question-number");
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

var highScores = JSON.parse(localStorage.getItem("scores")) || [];

// create arrays containing the questions and answers
var questions = ["What is the scientific name of a wolf?", 
                "Which mammal has no vocal cords?",
                "What is a female donkey called?",
                "What is the fastest land animal in the world?",
                "What is a group or crows called?"
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
    4: ["A Bank of crows",
                "A school fo crows",
                "A Gang of crows",
                "A Murder of crows"],  
    };







answerListEl.addEventListener("click", loopThroughQuestions);

//loop through questions
var loopThroughQuestions = function(event){

    var answereClicked = event.target

    if (answereClicked.matches(".answer")) {
        console.log("an answer was cliked")
    }

} //end of loopThroughQuestions

//seting  the initial minute for the counter
var minute = 60

// event listener for the estar button
startBtnEl.addEventListener("click", function(){

    //setting the counter
    setInterval(function(){
        if(minute > 0){
        minute--
        timerDisplayEl.innerHTML = minute + " seconds left"
        } else if (minute > 0 && rightWrongMsgEl.innerHTML !== "You are Correct!") {
            minute = minute - 10;
        } 
                                        //  else if (quizTitleEl.innerHTML.matchAll("score")) {
                                        // timerDisplayEl.innerHTML = "You're Done!"
                                        // minute = minute
                                        // }
        else if (minute === 0 ) {
        timerDisplayEl.innerHTML = "You're Done!"
        minute = minute
        }
    }, 1000);
    
    showQuestions(0, 0, 1)
    startBtnEl.className = "hide"
    
    });
        

//setting up the question, feeding their index number
var showQuestions = function (questionNum, answerNum, place){

    //set the first question
    quizTitleEl.className = "quiz-title"
    quizTitleEl.textContent = questions[questionNum];
    //set the first set of answers
    answerOneEl.textContent = answers[answerNum][0];
    answerTwoEl.textContent = answers[answerNum][1];
    answerThreeEl.textContent = answers[answerNum][2];
    answerFourEl.textContent = answers[answerNum][3];

    // questionNumberEl.textContent = "Question #"+place;
}

var countClick = 0
//event listener when an aswer is clicked
answerListEl.addEventListener("click", function (event){
    var answerClicked = event.target
    var answerClass = answerClicked.getAttribute("class")
    var answerText =  answerClicked.textContent
    countClick +=1  

    if(answerClass === "answer" && countClick < questions.length){
        console.log("answer was clicked" + countClick)
        showQuestions(countClick, countClick)
    }else {
        console.log("no answer clicked");
    }

    if (answerText === "Canis lupus" 
        || answerText === "Giraffe" 
        || answerText === "A Jenny" 
        || answerText === "The cheetah"
        || answerText === "A Murder of crows"){
    console.log("correct!")
    rightWrongMsgEl.innerHTML = "You are Correct!"
    } else {
        rightWrongMsgEl.innerHTML = "Wrong answer! (-10sec)"
        minute = minute-10;
    }


    if(countClick >= questions.length){
        answerListEl.className = "hide";
        countClick = "";
        quizTitleEl.innerHTML = "You Made it! your score is: "+ generalScore
        saveScore()
    }
});

var saveScore = function () {

    quizTitleEl.innerHTML = "You can save your Score of "+ minute + " . what are your initials?"
    rightWrongMsgEl.innerHTML = ""

    var initialsInput = document.createElement("input");
    initialsInput.setAttribute("type", "text");
    initialsInput.className = "input-style"
    quizHeadEl.appendChild(initialsInput);
    console.log(initialsInput)

    var saveScoreBtn = document.createElement("button");
    saveScoreBtn.innerHTML = "SAVE SCORE"
    saveScoreBtn.setAttribute("type", "submit");
    saveScoreBtn.className = "button-style"
    quizHeadEl.appendChild(saveScoreBtn);
    console.log(saveScoreBtn)

    var seeScoresBtn = document.createElement("button");
    seeScoresBtn.innerHTML = "SEE SCORES"
    seeScoresBtn.className = "button-style"
    quizHeadEl.appendChild(seeScoresBtn);

    var clearScoresBtn = document.createElement("button");
    clearScoresBtn.innerHTML = "CLEAR SCORES"
    clearScoresBtn.className = "button-style"
    quizHeadEl.appendChild(clearScoresBtn);

    var goBackBtn = document.createElement("button");
    goBackBtn.innerHTML = "GO BACK"
    goBackBtn.className = "button-style"
    quizHeadEl.appendChild(goBackBtn);

    // saveToLocal()
    saveScoreBtn.addEventListener("click", function (){
        
        var playerInitials = initialsInput.value;

        var playerInfo = {
            initials: playerInitials,
            score: minute,
        };

        highScores.push(playerInfo);

        localStorage.setItem("scores", JSON.stringify(highScores));

        saveScoreBtn.className = "hide";
    })

    seeScoresBtn.addEventListener("click", function(){
        seeScoresBtn.className ="hide";
        getScores();
    });

    goBackBtn.addEventListener("click", function(event){
        console.dir(event.target)
        location.reload()
    });

    clearScoresBtn.addEventListener("click", function(){
        clearScoresBtn.className ="hide";
        localStorage.clear();
        rightWrongMsgEl.innerHTML = ""
    });
};


//ceeate a button that displays a page where you can see the highscores


// gettItem() 
var getScores = function(){

    var scoresHeading = document.createElement("p");
        scoresHeading.innerHTML = "PLAYER"+"________"+"SCORE"
        rightWrongMsgEl.appendChild(scoresHeading);

    for (var i = 0; i < highScores.length; i++){
        
        var scoresToShow = document.createElement("p");
        scoresToShow.innerHTML = highScores[i].initials +" ------------------- "+ highScores[i].score
        rightWrongMsgEl.appendChild(scoresToShow);
        // console.log()};

}
}