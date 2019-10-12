/////////////////////////////////////////////////////////////////////
// MASTER OPTIONS

let time = 30;
let difficultyMode = 'easy';
let activeGameMode = "Timed";
let timeLeft = time;
let operation = "";
let currentHighScore = "";

// OTHER VARIABLES
let ans = 0;
let isPaused = false;

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
const operationButton = $('.operation-button');
const startCountdown = $('#start-countdown');
const gameSpace = $('#mathable');
const mainMenuHighScore = $('#main-menu-high-score')
const highScore = $('.high-score');
let currentScore = $('#current-score');
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
const inGameEndGame = $('#in-game-end-game');
const resumeButton = $('#resume-button');
const pausedMainMenu = $('#paused-main-menu');
const optionsButton = $('#options-button');
const gameMode = $('.game-mode');
const difficultyOptions = $('.difficulty-options');
const saveChanges = $('#save-changes');

/////////////////////////////////////////////////////////////////////
// FUNCTIONS

let game = () => {
    userInput.focus();
    // IF STATEMENT FOR GAME DIFFICULTY
    if (operation === "addition") {
        addition();
    } else if (operation === "subtraction") {
        subtraction();
    } else if (operation === "multiplication") {
        multiplication();
    } else if (operation === "division") {
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
        var a = Math.ceil(Math.random() * 25) + 25;
        var b = Math.ceil(Math.random() * 47) + 3;
        var c = Math.ceil(Math.random() * 45) + 5;
        ans = a - b - c;
        gameSpace.text(`${a} - ${b} - ${c}`);
        console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
    } else {
        var a = Math.ceil(Math.random() * 80) + 20;
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
        let randoming = Math.random();
        var a = Math.ceil(Math.random() * 8)+4;
        var b = Math.ceil(Math.random() * 4)+1;
        if (randoming < 0.5) {
            ans = a * a * b;
            gameSpace.text(`${a}² x ${b}`);
            console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
        } else {
            ans = a * b * b;
            gameSpace.text(`${a} x ${b}²`);
            console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
        }
    } else {
        let randoming = Math.random();
        var a = Math.ceil(Math.random() * 4)+2;
        var y = (Math.ceil(Math.random() * 4)+2);
        if (randoming < 0.33) {
            var b = y * y;
            var c = Math.ceil(Math.random() * 4)+2;
            ans = a * a * Math.sqrt(b) * c;
            gameSpace.text(`${a}² x √${b} x ${c}`);
            console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
        } else if (randoming < 0.67) {
            var c = y * y;
            var b = Math.ceil(Math.random() * 4)+2;
            ans = a * b * b * Math.sqrt(c);
            gameSpace.text(`${a} x ${b}² x √${c}`);
            console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
        } else {
            var d = (Math.ceil(Math.random() * 4)+2);
            var b = (Math.ceil(Math.random() * 4)+2);
            var c = (Math.ceil(Math.random() * 4)+2);
            ans = a * b * c * d;
            gameSpace.text(`${a} x ${b} x ${c} x ${d}`);
            console.log(`%cAnswer is ${ans}`,"color:green; font-size: 20px;");
        }
    }
};

let division = () => {
    if (difficultyMode === 'easy') {
        var b = Math.ceil(Math.random() * 9) + 3;
        var a = b * (Math.ceil(Math.random() * 9) +3);
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
            userInput.addClass('flash')
            setTimeout(function() {
            userInput.removeClass('flash')
            }, 400);
            console.log('Correct');
            correct();
            game();
        } else {
            userInput.addClass('shake')
            setTimeout(function() {
            userInput.removeClass('shake')
            }, 400);
            console.log("%cWrong" ,"font-size:20px;color:red;");
            wrong();
        };
    };
};

userInput.on('keydown', enter);

const correct = () => {
    if (difficultyMode === "easy") {
        if (operation === "addition") {
            scoreCounter++;
        } else if (operation === "subtraction") {
            scoreCounter = scoreCounter + 2 ;
        } else if (operation === "multiplication") {
            scoreCounter = scoreCounter + 3;
        } else if (operation === "division") {
            scoreCounter = scoreCounter + 4;
        } else {
            if (gameSpace.text().includes('+')) {
                scoreCounter = scoreCounter + 2;
            } else if (gameSpace.text().includes('-')) {
                scoreCounter = scoreCounter + 4;
            } else if (gameSpace.text().includes('x')) {
                scoreCounter = scoreCounter + 6;
            } else {
                scoreCounter = scoreCounter + 8;
            }
        }
        currentScore.text(scoreCounter);
        userInput.val("");
    } else if (difficultyMode === "medium") {
        if (operation === "addition") {
            scoreCounter = scoreCounter + 10;
        } else if (operation === "subtraction") {
            scoreCounter = scoreCounter + 20 ;
        } else if (operation === "multiplication") {
            scoreCounter = scoreCounter + 30;
        } else if (operation === "division") {
            scoreCounter = scoreCounter + 40;
        } else {
            if (gameSpace.text().includes('+')) {
                scoreCounter = scoreCounter + 20;
            } else if (gameSpace.text().includes('-')) {
                scoreCounter = scoreCounter + 40 ;
            } else if (gameSpace.text().includes('x')) {
                scoreCounter = scoreCounter + 60;
            } else {
                scoreCounter = scoreCounter + 80;
            }
        }
        currentScore.text(scoreCounter);
        userInput.val("");
    } else {
        if (operation === "addition") {
            scoreCounter = scoreCounter + 100;
        } else if (operation === "subtraction") {
            scoreCounter = scoreCounter + 200 ;
        } else if (operation === "multiplication") {
            scoreCounter = scoreCounter + 300;
        } else if (operation === "division") {
            scoreCounter = scoreCounter + 400;
        } else {
            if (gameSpace.text().includes('+')) {
                scoreCounter = scoreCounter + 200;
            } else if (gameSpace.text().includes('-')) {
                scoreCounter = scoreCounter + 400;
            } else if (gameSpace.text().includes('x')) {
                scoreCounter = scoreCounter + 600;
            } else {
                scoreCounter = scoreCounter + 800;
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
    if (activeGameMode == "Timed") {
        timer.show();
        timeLeft = time;
        timer.text(timeLeft);
        console.log('timer started');
        let x = setInterval(function() {
            if (!isPaused) {
                timeLeft--;
                timer.text(timeLeft);
            }
            if (timeLeft === 0) {
                clearInterval(x);
                gameEnd();
            }
        },1000);

        pausedMainMenu.on('click', () => {
            clearInterval(x);
            isPaused = false;
        })
        inGameEndGame.on('click', () => {
            clearInterval(x);
            gameEnd();
        })
    } else if (activeGameMode == "Casual") {
        timer.hide();
    }
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
    mainMenuHighScore.show();
    if (currentHighScore < scoreCounter) {
        currentHighScore = scoreCounter;
        highScore.text(currentHighScore);
    };
    if (currentHighScore >= 25) {
        $('#medium-tooltip').tooltip('dispose');
        $('#medium-button').css('pointer-events', '');
        difficultyOptions.eq(1).attr('disabled', false);
    };
    if (currentHighScore >= 250) {
        $('#hard-tooltip').tooltip('dispose')
        $('#hard-button').css('pointer-events', '');
        difficultyOptions.eq(2).attr('disabled', false);
    }
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

operationButton.on('click', (event) => {
    $('#start-tooltip').tooltip('dispose');
    let x = event.target.id;
    operationButton.removeClass('active');
    $(event.currentTarget).addClass('active');
    operation = x;
    startGame.attr('disabled', false);
    console.log(`${x} is selected`);
});

gameMode.on('click', (event) => {
    gameMode.removeClass('active');
    $(event.currentTarget).addClass('active');
    masterTime.text($(event.currentTarget).attr('value'));
    activeGameMode = $(event.currentTarget).text();
});

difficultyOptions.on('click', (event) => {
    difficultyOptions.removeClass('active');
    $(event.currentTarget).addClass('active');
    difficultyMode = $(event.currentTarget).attr('value');
    console.log($(event.currentTarget).attr('value'));
});

saveChanges.on('click', () => {
    startMenu.show();
});

mainMenuButton.on('click',() => {
    // location.reload();
    console.log('clicked main menu button');
    pausedScreen.hide();
    countdown.hide();
    inGame.hide();
    endGame.hide();
    startMenu.show();
    endGameScore.text("");
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

// TOOLTIPS
  $('[data-toggle="tooltip"]').tooltip()


// SHOW/HIDE SECTIONS
mainMenuHighScore.hide();
countdown.hide();
inGame.hide();
endGame.hide();
pausedScreen.hide();
masterTime.text(time + ' seconds');