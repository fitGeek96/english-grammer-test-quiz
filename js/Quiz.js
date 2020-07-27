//jshint esversion:6
export default function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.currentIndex = 0;
}
Quiz.prototype.hasEnded = function () {
  return this.currentIndex === this.questions.length;
};
Quiz.prototype.getCurrentQuestion = function () {
  return this.questions[this.currentIndex];
};
Quiz.prototype.nextIndex = function () {
  this.currentIndex++;
};
Quiz.prototype.guess = function (userGuess) {
  if (this.getCurrentQuestion().isCorrect(userGuess)) {
    this.score++;
  }
  this.nextIndex();
};
Quiz.prototype.restart = function () {
  this.score = 0;
  this.currentIndex = 0;
};
