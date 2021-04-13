(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  // Functions
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Amount of players that can be played on the field in soccer?",
      answers: {
        a: "7",
        b: "11",
        c: "2",
        d: "8",
      },
      correctAnswer: "b",
    },
    {
      question: "Amount of players that can be played on court in basketball",
      answers: {
        a: "5",
        b: "3",
        c: "4",
        d: "12",
      },
      correctAnswer: "a",
    },
    {
      question: "Amount of players that can be played in tennis?",
      answers: {
        a: "2",
        b: "4",
        c: "neither",
        d: "both",
      },
      correctAnswer: "d",
    },
    {
      question:
        "Amount of players that can be played on the field in baseball?",
      answers: {
        a: "10",
        b: "11",
        c: "18",
        d: "9",
      },
      correctAnswer: "d",
    },
    {
      question: "Amount of players that can be played in volleyball?",
      answers: {
        a: "5",
        b: "6",
        c: "7",
        d: "8",
      },
      correctAnswer: "b",
    },
    {
      question:
        "Amount of players that can be played on the field in football?",
      answers: {
        a: "8",
        b: "11",
        c: "10",
        d: "9",
      },
      correctAnswer: "b",
    },
    {
      question:
        "Amount of players that can be played on the field in ice hockey?",
      answers: {
        a: "6",
        b: "5",
        c: "8",
        d: "9",
      },
      correctAnswer: "a",
    },
    {
      question: "Amount of players that can be played in badminton?",
      answers: {
        a: "4",
        b: "2",
        c: "neither",
        d: "both",
      },
      correctAnswer: "d",
    },
    {
      question:
        "Amount of players that can be played on the field in field hockey?",
      answers: {
        a: "11",
        b: "10",
        c: "13",
        d: "9",
      },
      correctAnswer: "a",
    },
    {
      question: "Amount of players that can be played on the field in rugby?",
      answers: {
        a: "16",
        b: "15",
        c: "19",
        d: "18",
      },
      correctAnswer: "b",
    },
  ];

  // display quiz right away
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
