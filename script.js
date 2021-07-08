var score = '';
var questionsArr = [
    {
        question: "Which is NOT a JavaScript date type?",
        answers: ['boolean', 'string', 'infinity', 'number'],
        correctChoice: 2
    },
    {
        question: 'An undefined variable is a variable that has been given a value.',
    }]

    answers: ['True', 'False'],
    correctChoice; 1

{
    question: 'Which symbol is used for single line comments in JavaScript?',
    answers; ['//', '+', "/*", '$'],
    correctChoice; 0
}

{
    question: 'Which is not a looping structure in JavaScript?',
    answers; ['For', 'While', 'Do-While', 'If'],
    correctChoice; 3
}
{
    question: 'Which is one of the types of Pop up boxes available in JavaScript?',
    answers; ['Window', 'Alert', 'Id-Box', 'Pop'],
    correctChoice; 1
}

{
    question: 'What National League baseball team holds the most World Series Titles?',
    answers; ['Chicago Cubs', 'Atlanta Braves', 'St. Louis Cardinals', 'shift property'],
    correctChoice; 2
}

var currentQuestion = 0;
const timerStart = questionsArr.length * 15;
var timePassed = 0;
var timeLeft = timerStart;

var timerInterval = null;
var correctAnswer = questionsArr[currentQuestion].correctChoice;
var correct = questionsArr[currentQuestion].answers[correctAnswer];
var playerInitials = document.querySelector('#initials')

// hide question and result containers
document.getElementById('questionContainer').style.visibility = 'hidden';
document.getElementById('resultContainer').style.visibility = 'hidden';

// have the quiz function start when the button is clicked
document.getElementById('start-btn').addEventListener('click', quiz);

function quiz() {
    // hide intro container
    document.getElementById('introContainer').style.visibility = 'hidden';
    // make question container visible
    document.getElementById('questionContainer').style.visibility = 'visible';
    
    // start the countdown function
    timerInterval = setInterval(countdown, 1000);
    // start the questions
    displayQuestions();
};


function displayQuestions() {  
    var thisQuestion = questionsArr[currentQuestion];    
    var question = questionsArr[currentQuestion].question;
    var questionId = document.getElementById('question');
    var choicesId = document.getElementById('choices');

    // show question
    questionId.innerHTML = question;
    // clear old choices
    choicesId.innerHTML = ''}

        // get choices
        thisQuestion.answers.forEach(function(answer, i) {
            var choiceBtn = document.createElement('button');
            choiceBtn.setAttribute('id', 'choices');
            choiceBtn.setAttribute('class', 'li-btn btn')
            choiceBtn.setAttribute('value', answer);
            choiceBtn.innerHTML = i + 1 + ". " + answer;
            // click event listener
            choiceBtn.onclick = answerQuestion;
            // append to div
            choicesId.appendChild(choiceBtn);
         });
    
         function answerQuestion() {
            if (this.value !== correct) {
                timeLeft = timeLeft - 5;
                if (timeLeft < 0) {
                    timeLeft === 0;
                }
                // update timeLeft (only semi works. It flashes, but won't stay)
                document.getElementById('timer').innerHTML = " " + timeLeft;
            }}

                // update current question
    currentQuestion++;

    if (currentQuestion === questionsArr.length) {
        quizDone();
    } else {
        displayQuestions();
    }

    // Run if the timer hits 0
function onTimesUp() {
    clearInterval(timerInterval);
    alert('Time is up and your score is 0. To retry click OK.');
    location.reload();
};

// COUNTDOWN
function countdown() {
    timePassed = timePassed += 1;
    timeLeft = timerStart - timePassed;
    if (timeLeft === 0) {
        onTimesUp();
    };
    document.getElementById('timer').innerHTML = " " + timeLeft;
};

function quizDone() {
    // STOP TIMER

    clearInterval(timerInterval);
    if (timeLeft <= 0) {
        onTimesUp();
    }

}

    // HIDE question so we can show results
    document.getElementById('questionContainer').style.visibility = 'hidden';

    // show results container 
    document.getElementById('resultContainer').style.visibility = 'visible';

    // update score variable
    score = document.querySelector('#final-score')
    score.textContent = timeLeft;

// SCORES
function saveScore() {
    var initials = document.querySelector('#initials').value.trim();

    if (initials) {
        var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

        var addScore = {
            score: timeLeft,
            initials: initials
        
        };

        highScores.push(addScore);
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }
}

var input = document.getElementById("initials");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn").click();
    };
});

// show high scores
function displayHighscores() {
    var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.sort(function(a, b) {
        return b.score-a.score;
    

    highScores.forEach(function(score) {
        // list items for each score
        var scoreList = document.createElement('li');
        scoreList.innerHTML = ''+ score.score +' - '+ score.initials +'';

        // append to doc
        var list = document.querySelector('.high-scores');
        list.appendChild(scoreList);
    });

}   )

//delete high scores
var deleteBtn = document.querySelector('#clear-scores')
deleteBtn.onclick = deleteScores;

function deleteScores() {
    localStorage.removeItem('highScores');
    location.reload();
}

displayHighscores()}
