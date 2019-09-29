/////////////////////////////////////////////////////////////////////
// SELECTORS

const startMenu = $('#start-menu');
const countdown = $('#countdown');
const inGame = $('#in-game');
const endGame = $('#end-game');
const scoreBoard = $('#score-board');
const startGame = $('#start-game');
const userInput = $('#user-input');
const timer = $('#timer');
const time = 5;
const endGameScore = $('#end-game-score');
const pausedScreen = $('#paused-screen');

let startCountdown = $('#start-countdown');
let currentScore = $('#current-score');
let gameSpace = $('#mathable');
let scoreCounter = 0;

// BUTTON SELECTORS
const restartGameButton = $('#restart-game');
const mainMenuButton = $('#back-to-main-menu');
const additionButton = $('#addition');
const subtractionButton = $('#subtraction');
const multiplicationButton = $('#multiplication');
const divisionButton = $('#division');
const randomButton = $('#random');
const pauseButton = $('#pause-button');
const resumeButton = $('#resume-button');

// OTHER VARIABLES
let difficulty = "";
let c = 0
let isPaused = false;

/////////////////////////////////////////////////////////////////////
// FUNCTIONS

let game = () => {
    console.log('game started');
    userInput.focus();
    // IF STATEMENT FOR GAME DIFFICULTY
    if (difficulty === "addition") {
        addition();
    } else if (difficulty === "subtraction") {
        subtraction();
    } else if (difficulty === "multiplication") {
        multiplication();
    } else if (difficulty === "division") {
        division();
    } else {
        random();
    }
}

let addition = () => {
    var a = Math.ceil(Math.random() * 20);
    var b = Math.ceil(Math.random() * 20);
    c = a + b;
    gameSpace.text(a + '+' + b);
    console.log(c);
}

let subtraction = () => {
    var a = Math.ceil(Math.random() * 20);
    var b = Math.ceil(Math.random() * 20);
    c = a - b;
    gameSpace.text(a + '-' + b);
    console.log(c);
}

let multiplication = () => {
    var a = Math.ceil(Math.random() * 10);
    var b = Math.ceil(Math.random() * 10);
    c = a * b;
    gameSpace.text(a + '*' + b);
    console.log(c);
}

let division = () => {
    var b = Math.ceil(Math.random() * 10);
    var a = b * Math.ceil(Math.random() * 10);
    c = a / b;
    gameSpace.text(a + '/' + b);
    console.log(c);
}

let random = () => {
    let r = "";
    r = Math.floor(Math.random() * 4);
    if (r === 0) {
        addition();
    } else if (r === 1) {
        subtraction();
    } else if (r === 2) {
        multiplication();
    } else {
        division();
    }
}

let enter = (event)=>{
    if(event.keyCode === 13) {
        console.log(`Answer is ${event.target.value}`);
        let answer = event.target.value
        if (answer == c) {
            console.log('Correct');
            correct();
            game();
        } else {
            console.log("Wrong");
            wrong();
        }
    }
}

userInput.on('keydown', enter);

const correct = () => {
    if (difficulty === "addition") {
        scoreCounter++;
    } else if (difficulty === "subtraction") {
        scoreCounter = scoreCounter + 2 ;
    } else if (difficulty === "multiplication") {
        scoreCounter = scoreCounter + 3;
    } else if (difficulty === "division") {
        scoreCounter = scoreCounter + 4;
    } else {
        scoreCounter = scoreCounter + 5;
    }
    currentScore.text(scoreCounter);
    userInput.val("");
}

const wrong = () => {
    scoreCounter--;
    currentScore.text(scoreCounter);
    userInput.val("");
}

const gameStart = () => {
    countdown.hide();
    inGame.show();
    game();
    startTimer();
}

let startTimer = () => {
    let timeLeft = time;
    timer.text(timeLeft);
    console.log('timer started');
    let x = setInterval(function() {
        if (!isPaused) {
            timeLeft--;
            timer.text(timeLeft);
            if (timeLeft === 0) {
                clearInterval(x);
                gameEnd();
            }
        }
    },1000);
}

const startGameButtonClicked = () => {
    console.log('clicked on start/restart game button');
    scoreCounter = 0;
    currentScore.text(scoreCounter);
    let counter = 3;
    startMenu.hide();
    countdown.show();
    startCountdown.text(counter);

    let count = setInterval(function(){
        counter--;
        startCountdown.text(counter);
        if(counter === 0) {
            startCountdown.text('Go!');
            clearInterval(count);
        }
    },1000);

    setTimeout(function(){
        gameStart();
    }, 4000);
}

const gameEnd = () => {
    console.log('game has ended');
    inGame.hide();
    endGame.show();
    endGameScore.append(scoreCounter);
}


/////////////////////////////////////////////////////////////////////
// BUTTONS

startGame.attr('disabled', true);
startGame.on('click', () => {
    startGameButtonClicked();
})

restartGameButton.on('click', () => {
    startGameButtonClicked();
    endGame.hide();
    endGameScore.text("");
})


mainMenuButton.on('click',() => {
    console.log('clicked main menu button')
    countdown.hide();
    inGame.hide();
    endGame.hide();
    startMenu.show();
    endGameScore.text("");
})

additionButton.on('click', () => {
    difficulty = "addition";
    startGame.attr('disabled', false);
    console.log(difficulty);

})

subtractionButton.on('click', () => {
    difficulty = "subtraction";
    startGame.attr('disabled', false);
    console.log(difficulty);
})

multiplicationButton.on('click', () => {
    difficulty = "multiplication";
    startGame.attr('disabled', false);
    console.log(difficulty);
})

divisionButton.on('click', () => {
    difficulty = "division";
    startGame.attr('disabled', false);
    console.log(difficulty);
})

randomButton.on('click', () => {
    difficulty = "random";
    startGame.attr('disabled', false);
    console.log(difficulty);
})

pauseButton.on('click', () => {
    console.log('paused game');
    isPaused = true;
    pausedScreen.show();
    inGame.hide();
})

resumeButton.on('click', () => {
    console.log('resumed game')
    isPaused = false;
    pausedScreen.hide();
    inGame.show();
})

// SHOW/HIDE SECTIONS
countdown.hide();
inGame.hide();
endGame.hide();
pausedScreen.hide();
