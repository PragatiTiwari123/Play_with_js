const randomValue = Math.floor(Math.random()*100 + 1);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const startOver = document.querySelector('.resultParas');
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGame(guess);
    });
}

function validateGame(guess){

}