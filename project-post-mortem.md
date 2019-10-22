## Project 1: From F9 to A1 Post Mortem

#### Approach and Process

1. What in my process and approach to this project would I do differently next time?
  * Use an API for third-party questions instead of setting up the variables to each question. 
  * Mobile-first development. Currently, the game works on landscape mode on desktop, and portrait mode on mobile (however, not responsive). 

2. What in my process and approach to this project went well that I would repeat next time?

  * The process of planning the app in a way that uses 1 single page, but manipulating the DOM to show the different sections.

--

#### Code and Code Design

1. What in my code and program design in the project would I do differently next time?
  * Instead of tackling each operation ( + - * / ) individually, I should have taken a holistic approach on integrating all of them to a single function that checks for the variable. 
  * The `correct()` function has a lot of `switch` and `cases` in them. There is probably a way to streamline all of these. 

1. What in my code and program design in the project went well? Is there anything I would do the same next time?

  For each, please include code examples.
  1. Code snippet up to 20 lines.
  2. Code design documents or architecture drawings / diagrams.

  * Really happy with the timer: 
  ```
  let startTimer = () => {
    mainMenuSound.pause();
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
```

#### Unit 1 Post Mortem
1. What habits did I use during this unit that helped me? 
  * Trying my best to limit one function to do one thing. Turns out, this helped to solve several issues that occured when there was functionception. 
2. What habits did I have during this unit that I can improve on?
  * Better commentings. Sometimes, I get lost in my own code. 
  * Better flow of the code? Not sure what's best practice first. 
  * Callback functions. Should have used more of them to run my operations. 
3. How is the overall level of the course during this unit? (instruction, course materials, etc.)
  * Great. Touched on API only on week 7 and 8. Maybe could have spent more time with other examples here.
