import { DOMSelectors } from "./DOMSelectors";
import { Questions } from "./Questions";
console.log("connected");

//array of questions

let score = 0
//start the game
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById("questions")
const answerButtonsElement = document.getElementById("answer-buttons")

//a variable of
currentQuestionIndex

startButton.addEventListener('click', startGame)

//function
startGame = () => {
    questionsCounter = 0
    score = 0
    availaleQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availaleQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/index.html')
    }
    questionsCounter++
    progressText.innerText = 'Question'
}

//fucntion startGame() {
    //console.log('Started'
    // set to 0 because we are starting at the 1st question
    currentQuestionIndex = 0
    startButton.classList.add('hide')
    questionElement.classList.remove('hide')
    setNextQuestion()
//}

//begin on sound (alarm, whistle)

//begin pop up

//show the 1st question

function setNextQuestion(question) {
    //reset everything back to its normal state
    resetState()
    showQuestion[currentQuestionIndex]
}

function showQuestion(questions) {
    questionElement.innerText = question.question
    // loop through our questions' answers
    question.answers.forEach(answer => {
        //create a button for each one of them
        const button = document.createElement('button')
        button.innerText = answer.innerText
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        button.addEventListener.appendChild(button)
    })
}

myQuestions.forEach( (currentQuestion, questionNumber) => {
    // the code we want to run for each question goes here
  });

function resetState() {
    nextbutton.ClassList.add('hide')
    while (answerButtonsElement.firstChild) {
        (answerButtonsElement.removeChild)
    }
}

function showResults(questions, results){

}

submitButton.addEventListener('click', showResults)