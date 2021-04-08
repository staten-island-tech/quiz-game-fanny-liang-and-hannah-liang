import { DOMSelectors } from "./DOMSelectors";
import { Questions } from "./Questions";
console.log("connected");

//array of questions

let score;
//start the game
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById("questions")
const answerButtonsElement = document.getElementById("answer-buttons")

//a variable of
currentQuestionIndex

startButton.addEventListener('click', startGame)

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

function showQuestion(question) {
    questionElement.innerText = question.question
    // loop through our questions' answers
    question.answers.forEach(asnwer => {
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

function resetState() {
    nextbutton.ClassList.add('hide')
    while (answerButtonsElement.firstChild) {
        (answerButtonsElement.removeChild)
    }
}



