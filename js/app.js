//jshint esversion:6
import Question from "./Question.js";
import Quiz from "./Quiz.js";

const App = (() => {
  // Caching the DOM
  const quizQuestionEl = document.querySelector(".jabquiz__question");
  const trackerEl = document.querySelector(".jabquiz__tracker");
  const progressBarEl = document.querySelector(".progress__inner");
  const taglineEl = document.querySelector(".jabquiz__tagline");
  const choicesEl = document.querySelector(".jabquiz__choices");

  const q1 = new Question(
    "Q1. It's my birthday today! ....",
    ["Congratulations", "Thans a lot", "Help yourself", "Well done."],
    0
  );
  const q2 = new Question(
    "Q2. Fate smiles ... those who untiringly grapple with stark realities of life.",
    ["with", "over", "on", "round"],
    2
  );
  const q3 = new Question(
    "Q3. Catching the earlier train will give us the ... to do some shopping.",
    ["chance", "luck", "possibility", "occasion"],
    0
  );
  const q4 = new Question(
    "Q4. I saw a ... of cows in the field.",
    ["group", "herd", "swam", "flock"],
    1
  );
  const q5 = new Question(
    "Q5. Success in this examination depends ... hard work alone.",
    ["At", "On", "For", "Over"],
    1
  );
  const q6 = new Question(
    "Q6. Rohan and Rohit are twin brothers, but they do not look ....",
    ["unique", "alike", "different", "likely"],
    1
  );
  const q7 = new Question(
    "Q7. Amel always ... the permission of her father before going for movies.",
    ["seeking", "seeks", "sought", "seeker"],
    1
  );
  const q8 = new Question(
    "Q8. Even if it rains i shall come means ....",
    [
      "if i come it will not rain.",
      "if it rains i shall not come.",
      "i will certainely come wether it rains or not.",
      "whenever there is rain i shall come.",
    ],
    2
  );

  const quiz = new Quiz([q1, q2, q3, q4, q5, q6, q7, q8]);

  const setValue = (elem, value) => {
    elem.innerHTML = value;
  };

  const renderQuestion = (_) => {
    const currentQuestion = quiz.getCurrentQuestion().question;
    setValue(quizQuestionEl, currentQuestion);
  };

  const getPercentage = (num1, num2) => {
    return Math.floor((num1 / num2) * 100);
  };

  const renderTracker = (_) => {
    const index = quiz.currentIndex;
    setValue(trackerEl, `${index + 1} of ${quiz.questions.length}`);
  };

  const renderChoices = (_) => {
    const currentChoices = quiz.getCurrentQuestion().choices;
    let markup = "";
    currentChoices.forEach((elem, index) => {
      markup += ` <li class="jabquiz__choice">
        <input
          type="radio"
          class="jabquiz__input"
          name="choice"
          data-order="${index}"
          id="choice${index}"
        />
        <label for="choice${index}" class="jabquiz__label">
          <i></i> <span>${elem}</span></label
        >
      </li>`;
    });
    setValue(choicesEl, markup);
  };

  const renderAll = (_) => {
    if (quiz.hasEnded()) {
      // render end screen
    } else {
      //1. render question
      renderQuestion();
      //2. render tracker
      renderTracker();
      //3. render choices
      renderChoices();
      //4. render progress
    }
  };
})();
