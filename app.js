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

// BUTTON SELECTORS
const restartGame = $('#restart-game');
const mainMenu = $('#back-to-main-menu')



let startCountdown = $('#start-countdown');
let currentScore = $('#current-score');
let gameSpace = $('#mathable');
let scoreCounter = 0;
let c = 0

/////////////////////////////////////////////////////////////////////
// FUNCTIONS

let game = () => {
    console.log('game started')
    var a = Math.ceil(Math.random() * 20);
    var b = Math.ceil(Math.random() * 20);
    c = a + b;
    gameSpace.text(a + '+' + b)
    console.log(c)
}

let enter = (event)=>{
    if(event.keyCode === 13) {
        console.log(event.target.value)
        let answer = event.target.value
        if (answer == c) {
            console.log('Correct')
            correct()
            game()
        } else {
            console.log("Wrong")
            wrong()
        }
    }
}

userInput.on('keydown', enter);


const correct = () => {
    scoreCounter++
    currentScore.text(scoreCounter);
    userInput.val("")
}

const wrong = () => {
    scoreCounter--
    currentScore.text(scoreCounter);
    userInput.val("")
}

const gameStart = () => {
    countdown.hide()
    inGame.show()
    game()
    startTimer();
    endTimer();
}


let startTimer = () => {
    let timeLeft = time;
    timer.text(timeLeft);
    console.log('timer started')
    let x = setInterval(function(){
        timeLeft--
        timer.text(timeLeft)
        if (timeLeft === 0) {
            clearInterval(x)
        }
    },1000);
}

let endTimer = () => {
    setTimeout(function(){
    gameEnd()
    }, 5000)
}

const startGameButtonClicked = () => {
    console.log('clicked on start/restart game button')
    let counter = 3
    startMenu.hide();
    countdown.show();
    startCountdown.text(counter);

    let count = setInterval(function(){
        counter--
        startCountdown.text(counter);
        if(counter === 0) {
            startCountdown.text('Go!')
            clearInterval(count)
        }
    },1000);

    setTimeout(function(){
    gameStart();
  }, 4000);
}

const gameEnd = () => {
    console.log('game has ended')
    inGame.hide();
    endGame.show();
    endGameScore.append(scoreCounter)
}


/////////////////////////////////////////////////////////////////////
// BUTTONS

startGame.on('click', () => {
    startGameButtonClicked()
})

restartGame.on('click', () => {
    startGameButtonClicked()
    endGame.hide();
    endGameScore.text("")
})


mainMenu.on('click',() => {
    countdown.hide();
    inGame.hide();
    endGame.hide();
    startMenu.show();
})



// SHOW/HIDE SECTIONS

countdown.hide();
inGame.hide();
endGame.hide();
// game()