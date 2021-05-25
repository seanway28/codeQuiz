  
//This is where the questions are housed with the choice options and the correct answer identified. 
let questions = [
  {
      question: "How are you?",
      choices:["good", "bad", "alright", "cool"],
      correct: "good"
  },
]
var countdown;
var currentQuestion;
var btn = document.querySelector("#startBtn");
var main = document.querySelector("#initial-page");
// console.log(btn)

function beginTheQuiz(){
  // console.log("btn pressed")
  timerStarts()
  main.setAttribute("class", "hide")
  currentQuestion = 0;
  showQuestions()
}

function timerStarts(){
  var timerText = document.querySelector("#timer");
  countdown = 120;

  var quizInterval = setInterval(function(){
    countdown--;
    // console.log(countdown)
    timerText.textContent = countdown;

    if(countdown <= 0 ){
      clearInterval(quizInterval)
    }
  }, 1000)
}

function showQuestions() {
  var questionText = document.querySelector("#question")
  var choiceTextA = document.querySelector("#A")
  var choiceTextB = document.querySelector("#B")
  var choiceTextC = document.querySelector("#C")
  var choiceTextD = document.querySelector("#D")

  questionText.textContent = questions[currentQuestion].question;

  choiceTextA.textContent = questions[currentQuestion].choices[0];
  choiceTextB.textContent = questions[currentQuestion].choices[1];
  choiceTextC.textContent = questions[currentQuestion].choices[2];
  choiceTextD.textContent = questions[currentQuestion].choices[3];
}

btn.addEventListener("click", beginTheQuiz)