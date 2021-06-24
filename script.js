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
