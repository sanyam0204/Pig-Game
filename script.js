'use strict';
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let curscore = 0;
let active = 0;
let scores = [0, 0];
let playing = true;

const fnroll = function () {
  if (playing) {
    const num = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${num}.png`;
    dice.classList.remove('hidden');
    //console.log(num);
    if (num !== 1) {
      curscore += num;
      document.getElementById(`current--${active}`).textContent = curscore;
      //current0.textContent = curscore;
    } else {
      document.getElementById(`current--${active}`).textContent = 0;
      curscore = 0;
      document
        .querySelector(`.player--${active}`)
        .classList.remove('player--active');
      active = active === 0 ? 1 : 0;
      document
        .querySelector(`.player--${active}`)
        .classList.add('player--active');
    }
  }
};

const fnhold = function () {
  if (playing) {
    scores[active] += curscore;
    score0.textContent = scores[0];
    score1.textContent = scores[1];
    if (scores[active] >= 100) {
      playing = false;
      btnhold.classList.add('hidden');
      btnroll.classList.add('hidden');
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${active}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active}`)
        .classList.remove('player--active');
    } else {
      document.getElementById(`current--${active}`).textContent = 0;
      curscore = 0;
      document
        .querySelector(`.player--${active}`)
        .classList.remove('player--active');
      active = active === 0 ? 1 : 0;
      document
        .querySelector(`.player--${active}`)
        .classList.add('player--active');
    }
  }
};

const fnnew = function () {
  btnhold.classList.remove('hidden');
  btnroll.classList.remove('hidden');
  //dice.classList.remove('hidden');
  curscore = 0;
  playing = true;
  scores = [0, 0];
  active = 0;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('player--1').classList.remove('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  score0.textContent = scores[0];
  score1.textContent = scores[1];
  current0.textContent = curscore;
  current1.textContent = curscore;
};

dice.classList.add('hidden');
btnhold.classList.remove('hidden');
btnroll.classList.remove('hidden');
score0.textContent = 0;
score1.textContent = 0;
btnroll.addEventListener('click', fnroll);
btnhold.addEventListener('click', fnhold);
btnnew.addEventListener('click', fnnew);
