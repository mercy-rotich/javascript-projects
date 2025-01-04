let randomNumber = Math.floor(Math.random()*100) +1;
let guesses = 0;
let maxGuesses=10;
let highScore=localStorage.getItem('highScore')||Infinity;

function checkGuess (){
    const userGuess = Number(document.getElementById("guessInput").value);
    const feedback = document.getElementById("feedback");

    if(guesses<maxGuesses){
        guesses++;
    
        if(userGuess === randomNumber){
            feedback.textContent=`congratulations! you guessed the correct number:${randomNumber}`;
            feedback.style.color="green";
        }
        else if(userGuess > randomNumber){
            feedback.textContent="Too high! Try again!";
            feedback.style.color="red";
        }
        else if(userGuess < randomNumber){
            feedback.textContent="Too Low! Try again";
            feedback.style.color="red";
        }
    
        document.getElementById("guessCount").textContent=`Guesses:${guesses}/${maxGuesses}`;
    }
    else{
        feedback.textContent=`Game over! You've reached the maximum number of guesses.The correct number was ${randomNumber}`;
        feedback.style.color="orange";
        disableInput();
    }

    if (guesses===5){
        if(randomNumber%2===0){
            feedback.textContent +="Hint:the number is even";
        }
        else{
            feedback.textContent +="Hint: the number is odd";
        }
    }

    if (userGuess===randomNumber){
        if(guesses<highScore){
            highScore=guesses;
            localStorage.setItem('highScore',highScore);
            feedback.textContent += `New High Score:${highScore} guesses!`;
        }
    }
    }
    function displayHighScore(){
        const storedHighScore =localStorage.getItem('highScore');
        if(storedHighScore !==null){
            document.getElementById("highScore").textContent=`High Score: ${storedHighScore} guesses`;
        }
    }
    function disableInput(){
        document.getElementById("guessInput").disabled=true;


    }

    


function restartGame(){
    randomNumber = Math.floor(Math.random()*100) +1;
    guesses=0;

    document.getElementById("guessInput").value='';
    document.getElementById("feedback").textContent='';
    document.getElementById("guessCount").textContent=guesses;
}



