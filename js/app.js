// MASTER OPTIONS
let time = 30,
difficultyMode = 'easy',
activeGameMode = "Timed",
timeLeft = time,
operation = "",
currentHighScore = "",
ans = 0,
isPaused = false,
scoreCounter = 0;

// SELECTORS
const startMenu = $('#start-menu'),
countdown = $('#countdown'),
inGame = $('#in-game'),
endGame = $('#end-game'),
scoreBoard = $('#score-board'),
startGame = $('#start-game'),
userInput = $('#user-input'),
timeBar = $('#time-bar'),
endGameScore = $('#end-game-score'),
pausedScreen = $('#paused-screen'),
masterTime = $('#master-time'),
operationButton = $('.operation-button'),
startCountdown = $('#start-countdown'),
gameSpace = $('#mathable'),
mainMenuHighScore = $('#main-menu-high-score'),
highScore = $('.high-score'),
currentScore = $('#current-score'),

// BUTTON SELECTORS
restartGameButton = $('#restart-game'),
mainMenuButton = $('.back-to-main-menu'),
additionButton = $('#addition'),
subtractionButton = $('#subtraction'),
multiplicationButton = $('#multiplication'),
divisionButton = $('#division'),
randomButton = $('#random'),
pauseButton = $('#pause-button'),
inGameEndGame = $('#in-game-end-game'),
resumeButton = $('#resume-button'),
pausedMainMenu = $('#paused-main-menu'),
gameMode = $('.game-mode'),
difficultyOptions = $('.difficulty-options');

// FUNCTIONS
let game = () => {
    userInput.focus();
    switch (operation) {
        case "addition":
        addition();
        break;
        case "subtraction":
        subtraction();
        break;
        case "multiplication":
        multiplication();
        break;
        case "division":
        division();
        break;
        default:
        random();
    }
};

let addition = () => {
    switch (difficultyMode) {
        case "easy":
        var a = Math.ceil(Math.random() * 45) + 5;
        var b = Math.ceil(Math.random() * 47) + 3;
        ans = a + b;
        gameSpace.text(a + '+' + b);
        break;
        case "medium":
        var a = Math.ceil(Math.random() * 45) + 5;
        var b = Math.ceil(Math.random() * 47) + 3;
        ans = a + b;
        gameSpace.text(a + '+' + b);
        break;
        default:
        var a = Math.ceil(Math.random() * 45) + 5;
        var b = Math.ceil(Math.random() * 47) + 3;
        var c = Math.ceil(Math.random() * 45) + 5;
        var d = Math.ceil(Math.random() * 47) + 3;
        ans = a + b + c + d;
        gameSpace.text(`${a} + ${b} + ${c} + ${d}`);
    }
};

let subtraction = () => {
    switch (difficultyMode) {
        case "easy":
        var a = Math.ceil(Math.random() * 45) + 5;
        var b = Math.ceil(Math.random() * 47) + 3;
        ans = a - b;
        gameSpace.text(a + '-' + b);
        break;
        case "medium":
        var a = Math.ceil(Math.random() * 25) + 25;
        var b = Math.ceil(Math.random() * 47) + 3;
        var c = Math.ceil(Math.random() * 45) + 5;
        ans = a - b - c;
        gameSpace.text(`${a} - ${b} - ${c}`);
        break;
        default:
        var a = Math.ceil(Math.random() * 80) + 20;
        var b = Math.ceil(Math.random() * 47) + 3;
        var c = Math.ceil(Math.random() * 45) + 5;
        var d = Math.ceil(Math.random() * 47) + 3;
        ans = a - b - c - d;
        gameSpace.text(`${a} - ${b} - ${c} - ${d}`);
    }
}


let multiplication = () => {
    let randoming = Math.random();
    switch (difficultyMode) {
        case "easy":
        var a = Math.ceil(Math.random() * 9) + 3;
        var b = Math.ceil(Math.random() * 9) + 3;
        ans = a * b;
        gameSpace.text(a + 'x' + b);
        break;
        case "medium":
        randoming = Math.random();
        var a = Math.ceil(Math.random() * 8)+4;
        var b = Math.ceil(Math.random() * 4)+1;
        if (randoming < 0.5) {
            ans = a * a * b;
            gameSpace.text(`${a}² x ${b}`);
        } else {
            ans = a * b * b;
            gameSpace.text(`${a} x ${b}²`);
        }
        break;
        default:
        randoming = Math.random();
        var a = Math.ceil(Math.random() * 4)+2;
        var y = (Math.ceil(Math.random() * 4)+2);
        switch (true) {
            case (randoming < 0.33):
            var b = y * y;
            var c = Math.ceil(Math.random() * 4)+2;
            ans = a * a * Math.sqrt(b) * c;
            gameSpace.text(`${a}² x √${b} x ${c}`);
            break;
            case (randoming < 0.67):
            var c = y * y;
            var b = Math.ceil(Math.random() * 4)+2;
            ans = a * b * b * Math.sqrt(c);
            gameSpace.text(`${a} x ${b}² x √${c}`);
            break;
            default:
            var d = (Math.ceil(Math.random() * 4)+2);
            var b = (Math.ceil(Math.random() * 4)+2);
            var c = (Math.ceil(Math.random() * 4)+2);
            ans = a * b * c * d;
            gameSpace.text(`${a} x ${b} x ${c} x ${d}`);
        }
    }
};

let division = () => {
    switch (difficultyMode) {
        case "easy":
        var b = Math.ceil(Math.random() * 9) + 3;
        var a = b * (Math.ceil(Math.random() * 9) +3);
        ans = a / b;
        gameSpace.text(a + '÷' + b);
        break;
        case "medium":
        var b = Math.ceil(Math.random() * 2) + 3;
        var y = b * (Math.ceil(Math.random() * 7));
        var a = y * y;
        ans = y / b
        gameSpace.text(`√${a} ÷ ${b}`);
        break;
        default:
        var z = Math.ceil(Math.random() * 2) + 2;
        var b = z * z;
        var y = b * (Math.ceil(Math.random() * 3));
        var a = y * y;
        ans = y/z;
        gameSpace.text(`√${a} ÷ √${b}`);
    }
};

let random = () => {
    let r = "";
    r = Math.floor(Math.random() * 4);
    switch (true) {
        case (r === 0):
        addition();
        break;
        case (r === 1):
        subtraction();
        break;
        case (r === 2):
        multiplication();
        break;
        default:
        division();
    }
};

let enter = (event) => {
    let answer = event.target.value;
    if (answer == ans) {
        userInput.addClass('flash')
        setTimeout(function() {
            userInput.removeClass('flash')
        }, 400);
        correct();
        game();
    } else {
        userInput.addClass('shake')
        setTimeout(function() {
            userInput.removeClass('shake')
        }, 400);
        wrong();
    };
};

userInput.on('keydown', function (event) {
    if (event.keyCode === 13) {
        enter(event);
    } else if (event.keyCode === 32) {
        game();
    }
});

const correct = () => {
    switch (difficultyMode) {
        case "easy":
        switch (operation) {
            case "addition":
            scoreCounter = scoreCounter + 2;
            break;
            case "subtraction":
            scoreCounter = scoreCounter + 3;
            break;
            case "multiplication":
            scoreCounter = scoreCounter + 4;
            break;
            case "division":
            scoreCounter = scoreCounter + 5;
            break;
            default:
            switch (true) {
                case (gameSpace.text().includes('+')):
                scoreCounter = scoreCounter + 4;
                break;
                case (gameSpace.text().includes('-')):
                scoreCounter = scoreCounter + 6;
                break;
                case (gameSpace.text().includes('x')):
                scoreCounter = scoreCounter + 8;
                break;
                default:
                scoreCounter = scoreCounter + 10;
            }
        }
        break;
        case "medium":
        switch (operation) {
            case "addition":
            scoreCounter = scoreCounter + 20;
            break;
            case "subtraction":
            scoreCounter = scoreCounter + 30;
            break;
            case "multiplication":
            scoreCounter = scoreCounter + 40;
            break;
            case "division":
            scoreCounter = scoreCounter + 50;
            break;
            default:
            switch (true) {
                case (gameSpace.text().includes('+')):
                scoreCounter = scoreCounter + 40;
                break;
                case (gameSpace.text().includes('-')):
                scoreCounter = scoreCounter + 60;
                break;
                case (gameSpace.text().includes('x')):
                scoreCounter = scoreCounter + 80;
                break;
                default:
                scoreCounter = scoreCounter + 100;
            }
        }
        break;
        default:
        switch (operation) {
            case "addition":
            scoreCounter = scoreCounter + 200;
            break;
            case "subtraction":
            scoreCounter = scoreCounter + 300;
            break;
            case "multiplication":
            scoreCounter = scoreCounter + 400;
            break;
            case "division":
            scoreCounter = scoreCounter + 500;
            break;
            default:
            switch (true) {
                case (gameSpace.text().includes('+')):
                scoreCounter = scoreCounter + 400;
                break;
                case (gameSpace.text().includes('-')):
                scoreCounter = scoreCounter + 600;
                break;
                case (gameSpace.text().includes('x')):
                scoreCounter = scoreCounter + 800;
                break;
                default:
                scoreCounter = scoreCounter + 1000;
            }
        }
    }
    currentScore.text(scoreCounter);
    userInput.val("");
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
};

let startTimer = () => {
    if (activeGameMode === "Timed") {
        timeBar.show();
        timeBar.addClass('colorchange');
        timeLeft = time;
        let x = setInterval(function() {
            if (!isPaused) {
                timeLeft = timeLeft - 0.01;
                timeBar.width(((timeLeft/time)*100)+'%');
            }
            if (timeLeft <= 0.01) {
                clearInterval(x);
                gameEnd();
            }
        },10);
        pausedMainMenu.on('click', () => {
            clearInterval(x);
            isPaused = false;
        })
        inGameEndGame.on('click', () => {
            clearInterval(x);
        })
    } else if (activeGameMode === "Casual") {
        timeBar.hide();
    }
};

const startGameButtonClicked = () => {
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
});

inGameEndGame.on('click', () => {
    gameEnd();
});

mainMenuButton.on('click',() => {
    pausedScreen.hide();
    countdown.hide();
    inGame.hide();
    endGame.hide();
    startMenu.show();
    endGameScore.text("");
});

pauseButton.on('click', () => {
    timeBar.css('animation-play-state', 'paused');
    isPaused = true;
    pausedScreen.show();
    inGame.hide();
});

resumeButton.on('click', () => {
    timeBar.css('animation-play-state', '');
    isPaused = false;
    pausedScreen.hide();
    inGame.show();
});

// TOOLTIPS
$('[data-toggle="tooltip"]').tooltip();

// SHOW/HIDE SECTIONS
mainMenuHighScore.hide();
countdown.hide();
inGame.hide();
endGame.hide();
pausedScreen.hide();