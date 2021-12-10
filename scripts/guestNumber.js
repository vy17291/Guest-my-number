'use strict';
const guestNumber = document.querySelector('.number');
const userInput = document.querySelector('.guess');
const check = document.querySelector('.check');
const score = document.querySelector('.score');
const message = document.querySelector('.message');
const labelScore = document.querySelector('.label-score');

//guestNumber.textContent = 15;
// document.querySelector('.number').textContent = '12';
let currentScore = 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;

const pageBG = document.querySelector('.wrapping');
console.log(randomNumber);
const checkWin = function() {
    if (userInput.value == randomNumber) {
        guestNumber.textContent = randomNumber;
        labelScore.textContent = `Your score ${currentScore}`;
        pageBG.style.background = '#60b347';
        // score.textContent = currentScore;
        message.textContent = "Correct Number !"
    } else if (userInput.value === "") {
        message.textContent = "Input can't be Empty. Try Again !";
    } else {
        
        currentScore--;
        score.textContent = currentScore;
        if (currentScore == 0) {
            message.textContent = "Game Over ! Play Again";
        }
        if (userInput.value > randomNumber) {
            message.textContent = "Lower, Try Again !";
        } else {
            message.textContent = "Higher, Try Again !"
        }
        userInput.value = "";
        console.log(currentScore)
    }
}
check.addEventListener('click', function() {
    checkWin();
});

document.querySelector('.again').addEventListener('click', function() {
    location.reload();
})