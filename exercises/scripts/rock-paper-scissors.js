let score = {
	wins: 0,
	losses: 0,
	ties: 0
};

const savedScore = JSON.parse(localStorage.getItem('score'));
if (savedScore) {
score = savedScore;
}

updateScoreElement();

let isPlay = false;
let intervalId;
let intervalTime = 1000;
function autoPlay() {
if (!isPlay) {
	intervalId = setInterval(() => {
		let playerMove = pickComputerMove();
		makeMove(playerMove);
		console.log(intervalTime);
	}, intervalTime);
	isPlay = true;
	
}
else {
	clearInterval(intervalId);
	isPlay = false;
}


}

document.querySelector('.rock-button').addEventListener('click', () => {
makeMove('rock');
})
document.querySelector('.paper-button').addEventListener('click', () => {
makeMove('paper');
})
document.querySelector('.scissors-button').addEventListener('click', () => {
makeMove('scissors');
})

document.body.addEventListener('keydown', (event) => {
if (event.key === 'r') {
	makeMove('rock');
}
else if (event.key === 'p') {
	makeMove('paper');
}
else if (event.key === 's') {
	makeMove('scissors');
}
console.log(event.key);
})
function makeMove(playerMove) {
const computerMove = pickComputerMove();
const resultElement = document.querySelector('.js-result');

if (playerMove === computerMove) {
  resultElement.innerHTML = `Tie.`;
  score.ties += 1;

} else if (
  (playerMove === 'rock' && computerMove === 'scissors') ||
  (playerMove === 'paper' && computerMove === 'rock') ||
  (playerMove === 'scissors' && computerMove === 'paper')
) {
  resultElement.innerHTML = `You win.`;
  score.wins += 1;

} else {
  resultElement.innerHTML = `You lose.`;
  score.losses += 1;
}

const movesElement = document.querySelector('.js-moves-chosen');
movesElement.innerHTML = `
  You
  <img src="../images/${playerMove}-emoji.png" class="move-icon">
  <img src="../images/${computerMove}-emoji.png" class="move-icon">
  Computer
`;

updateScoreElement();
localStorage.setItem('score', JSON.stringify(score));
}

function resetScore() {
score = {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();
localStorage.removeItem('score');
}

function pickComputerMove() {
const randomNumber = Math.random();
let computerMove;

if (randomNumber < (1 / 3)) {
  computerMove = 'rock';
} else if (randomNumber < (2 / 3)) {
  computerMove = 'paper';
} else {
  computerMove = 'scissors';
}

return computerMove;
}

function updateScoreElement() {
document.querySelector('.js-score').innerHTML = `
  Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
`;
}

document.querySelector('.reset-score-button')
	.addEventListener('click', () => {
	// Solution for 12v.
	// resetScore();

	// Solution for 12x.
	showResetConfirmation();
});

function showResetConfirmation() {
document.querySelector('.js-reset-confirmation')
  .innerHTML = `
	Are you sure you want to reset the score?
	<button class="js-reset-confirm-yes reset-confirm-button">
	  Yes
	</button>
	<button class="js-reset-confirm-no reset-confirm-button">
	  No
	</button>
  `;

document.querySelector('.js-reset-confirm-yes')
  .addEventListener('click', () => {
	resetScore();
	hideResetConfirmation();
  });

document.querySelector('.js-reset-confirm-no')
  .addEventListener('click', () => {
	hideResetConfirmation();
  });
}

function hideResetConfirmation() {
document.querySelector('.js-reset-confirmation')
  .innerHTML = '';
}



