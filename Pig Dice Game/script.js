'use strict';

// Getting the elements of the scores
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



//Initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function(){
  //Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log.apply(dice);

  //Display the corresponding dice face
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //Check if rolled a 1: if true, switch player
  
  
  if(dice !== 1){
    //Case if dice isnt 1: Add to current score
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent = currentScore;


  }else{
    //Case if dice is a 1: Switch the active player

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');


  }



})