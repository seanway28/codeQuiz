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
    question: 'If you want to know the number of elements in an array, what property should you use?',
    answers; ['prototype property', 'reverse property', 'length property', 'shift property'],
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

    // run if the timer hits 0
function onTimesUp() {
    clearInterval(timerInterval);
    alert('Time is up and your score is 0. To retry click OK.');
    location.reload();
};

// countdown timer
function countdown() {
    timePassed = timePassed += 1;
    timeLeft = timerStart - timePassed;
    if (timeLeft === 0) {
        onTimesUp();
    };
    document.getElementById('timer').innerHTML = " " + timeLeft;
};

function quizDone() {
    // stop timer
    
    clearInterval(timerInterval);
    if (timeLeft <= 0) {
        onTimesUp();
    }

}
