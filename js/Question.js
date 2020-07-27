//jshint esversion:6
export default function Question(question, choices, answerKey) {
  this.question = question;
  this.choices = choices;
  this.answerKey = answerKey;
}

Question.prototype.isCorrect = function (userGuess) {
  return userGuess === this.answerKey;
};
