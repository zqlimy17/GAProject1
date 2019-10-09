/////////////////////////////////////////////////////////////////////
// MASTER OPTIONS

let time = 30;
let difficultyMode = 'easy';

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
const endGameScore = $('#end-game-score');
const pausedScreen = $('#paused-screen');
const masterTime = $('#master-time')
const optionsMenu = $('#options-menu')
const difficultyButton = $('.difficulty-button');

let startCountdown = $('#start-countdown');
let currentScore = $('#current-score');
let gameSpace = $('#mathable');
let scoreCounter = 0;

// BUTTON SELECTORS
const restartGameButton = $('#restart-game');
const mainMenuButton = $('.back-to-main-menu');
const additionButton = $('#addition');
const subtractionButton = $('#subtraction');
const multiplicationButton = $('#multiplication');
const divisionButton = $('#division');
const randomButton = $('#random');
const pauseButton = $('#pause-button');
const resumeButton = $('#resume-button');
const optionsButton = $('#options-button');
const timeButton = $('.time-button')
const difficultyOptions = $('.difficulty-options')
const saveChanges = $('#save-changes')

// OTHER VARIABLES
let difficulty = "";
let ans = 0;
let isPaused = false;

/////////////////////////////////////////////////////////////////////
// FUNCTIONS

let game = () => {
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
};

let addition = () => {
    if (difficultyMode === 'easy') {
        var a = Math.ceil(Math.random() * 45) + 5;
        var b = Math.ceil(Math.random() * 47) + 3;
        ans = a + b;
        gameSpace.text(a + '+' + b);
        console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
    } else if (difficultyMode === 'medium') {
        var a = Math.ceil(Math.random() * 45) + 5;
        var b = Math.ceil(Math.random() * 47) + 3;
        var c = Math.ceil(Math.random() * 45) + 5;
        ans = a + b + c;
        gameSpace.text(`${a} + ${b} + ${c}`);
        console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
    } else {
        var a = Math.ceil(Math.random() * 45) + 5;
        var b = Math.ceil(Math.random() * 47) + 3;
        var c = Math.ceil(Math.random() * 45) + 5;
        var d = Math.ceil(Math.random() * 47) + 3;
        ans = a + b + c + d;
        gameSpace.text(`${a} + ${b} + ${c} + ${d}`);
        console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
    }
};

let subtraction = () => {
    if (difficultyMode === 'easy') {
        var a = Math.ceil(Math.random() * 45) + 5;
        var b = Math.ceil(Math.random() * 47) + 3;
        ans = a - b;
        gameSpace.text(a + '-' + b);
        console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
    } else if (difficultyMode === 'medium') {
        var a = Math.ceil(Math.random() * 50) + 50;
        var b = Math.ceil(Math.random() * 47) + 3;
        var c = Math.ceil(Math.random() * 45) + 5;
        ans = a - b - c;
        gameSpace.text(`${a} - ${b} - ${c}`);
        console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
    } else {
        var a = Math.ceil(Math.random() * 50) + 100;
        var b = Math.ceil(Math.random() * 47) + 3;
        var c = Math.ceil(Math.random() * 45) + 5;
        var d = Math.ceil(Math.random() * 47) + 3;
        ans = a - b - c - d;
        gameSpace.text(`${a} - ${b} - ${c} - ${d}`);
        console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
    }
};

let multiplication = () => {
    if (difficultyMode === 'easy') {
        var a = Math.ceil(Math.random() * 9) + 3;
        var b = Math.ceil(Math.random() * 9) + 3;
        ans = a * b;
        gameSpace.text(a + 'x' + b);
        console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
    } else if (difficultyMode === 'medium') {
        var a = Math.ceil(Math.random() * 8)+1;
        var b = Math.ceil(Math.random() * 4)+1;
        ans = a * a * b;
        gameSpace.text(`${a}² x ${b}`);
        console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
    } else {
        var a = Math.ceil(Math.random() * 4)+2;
        // var b = (Math.ceil(Math.random() * 4)+2) * (Math.ceil(Math.random() * 4)+2);
        var y = (Math.ceil(Math.random() * 4)+2);
        var b = y * y
        var c = Math.ceil(Math.random() * 4)+2;
        ans = a * a * Math.sqrt(b) * c;
        gameSpace.text(`${a}² x √${b} x ${c}`);
        console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
    }
};

let division = () => {
    if (difficultyMode === 'easy') {
        var b = Math.ceil(Math.random() * 10) + 3;
        var a = b * Math.ceil(Math.random() * 10);
        ans = a / b;
        gameSpace.text(a + '÷' + b);
        console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
    } else if (difficultyMode === 'medium') {
        var b = Math.ceil(Math.random() * 2) + 3;
        var y = b * (Math.ceil(Math.random() * 7));
        var a = y * y;
        ans = y / b
        gameSpace.text(`√${a} ÷ ${b}`);
        console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
    } else {
        var z = Math.ceil(Math.random() * 2) + 2;
        var b = z * z;
        var y = b * (Math.ceil(Math.random() * 3));
        var a = y * y;
        ans = y/z;
        gameSpace.text(`√${a} ÷ √${b}`);
        console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
    }
};

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
};

let enter = (event) => {
    if (event.keyCode === 13) {
        let answer = event.target.value
        if (answer == ans) {
            console.log('Correct');
            correct();
            game();
        } else {
            console.log("%cWrong" ,"font-size:20px;color:red;");
            wrong();
        };
    };
};

userInput.on('keydown', enter);

const correct = () => {
    if (difficultyMode === "easy") {
        if (difficulty === "addition") {
            scoreCounter++;
        } else if (difficulty === "subtraction") {
            scoreCounter = scoreCounter + 2 ;
        } else if (difficulty === "multiplication") {
            scoreCounter = scoreCounter + 3;
        } else if (difficulty === "division") {
            scoreCounter = scoreCounter + 4;
        } else {
            if (gameSpace.text().includes('+')) {
                scoreCounter = scoreCounter + 2;
            } else if (gameSpace.text().includes('-')) {
                scoreCounter = scoreCounter + 3;
            } else if (gameSpace.text().includes('x')) {
                scoreCounter = scoreCounter + 4;
            } else {
                scoreCounter = scoreCounter + 5;
            }
        }
        currentScore.text(scoreCounter);
        userInput.val("");
    } else if (difficultyMode === "medium") {
        if (difficulty === "addition") {
            scoreCounter = scoreCounter + 10;
        } else if (difficulty === "subtraction") {
            scoreCounter = scoreCounter + 20 ;
        } else if (difficulty === "multiplication") {
            scoreCounter = scoreCounter + 30;
        } else if (difficulty === "division") {
            scoreCounter = scoreCounter + 40;
        } else {
            if (gameSpace.text().includes('+')) {
                scoreCounter = scoreCounter + 20;
            } else if (gameSpace.text().includes('-')) {
                scoreCounter = scoreCounter + 30 ;
            } else if (gameSpace.text().includes('x')) {
                scoreCounter = scoreCounter + 40;
            } else {
                scoreCounter = scoreCounter + 50;
            }
        }
        currentScore.text(scoreCounter);
        userInput.val("");
    } else {
        if (difficulty === "addition") {
            scoreCounter = scoreCounter + 100;
        } else if (difficulty === "subtraction") {
            scoreCounter = scoreCounter + 200 ;
        } else if (difficulty === "multiplication") {
            scoreCounter = scoreCounter + 300;
        } else if (difficulty === "division") {
            scoreCounter = scoreCounter + 400;
        } else {
            if (gameSpace.text().includes('+')) {
                scoreCounter = scoreCounter + 200;
            } else if (gameSpace.text().includes('-')) {
                scoreCounter = scoreCounter + 300;
            } else if (gameSpace.text().includes('x')) {
                scoreCounter = scoreCounter + 400;
            } else {
                scoreCounter = scoreCounter + 500;
            }
        }
        currentScore.text(scoreCounter);
        userInput.val("");
    }
};

const wrong = () => {
    scoreCounter--;
    currentScore.text(scoreCounter);
    userInput.val("");
};

const gameStart = () => {
    countdown.hide();
    inGame.show();
    game();
    startTimer();
    console.log('Game Started');
};

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
};

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
};

const gameEnd = () => {
    console.log('game has ended');
    inGame.hide();
    endGame.show();
    endGameScore.append(scoreCounter);
};

/////////////////////////////////////////////////////////////////////
// BUTTONS

startGame.attr('disabled', true);
startGame.on('click', () => {
    startGameButtonClicked();
});

restartGameButton.on('click', () => {
    startGameButtonClicked();
    endGame.hide();
    endGameScore.text("");
});

difficultyButton.on('click', (event) => {
    let x = event.target.id;
    difficultyButton.removeClass('active');
    $(`#${x}`).addClass('active');
    difficulty = x;
    startGame.attr('disabled', false);
    console.log(difficulty);
});

optionsButton.on('click', () => {
    startMenu.hide();
    optionsMenu.show();
});

timeButton.on('click', (event) => {
    timeButton.removeClass('active');
    $(event.currentTarget).addClass('active');
    time = $(event.currentTarget).attr('value');
    masterTime.text(time);
});

difficultyOptions.on('click', (event) => {
    difficultyOptions.removeClass('active');
    $(event.currentTarget).addClass('active');
});

saveChanges.on('click', () => {
    startMenu.show();
    optionsMenu.hide();
});

// t30s.on('click', (event) => {
//     t30s.removeClass('active');
//     t30s.addClass('active');
//     time = 30;
// })

mainMenuButton.on('click',() => {
    location.reload();
    // console.log('clicked main menu button');
    // pausedScreen.hide();
    // countdown.hide();
    // inGame.hide();
    // endGame.hide();
    // startMenu.show();
    // endGameScore.text("");
});

pauseButton.on('click', () => {
    console.log('paused game');
    isPaused = true;
    pausedScreen.show();
    inGame.hide();
});

resumeButton.on('click', () => {
    console.log('resumed game');
    isPaused = false;
    pausedScreen.hide();
    inGame.show();
});

// SHOW/HIDE SECTIONS
countdown.hide();
inGame.hide();
endGame.hide();
pausedScreen.hide();
optionsMenu.hide();

masterTime.text(time);