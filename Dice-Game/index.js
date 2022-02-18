let MAX_CLICKS = 10;
let clicks = 0;
let Score1 = 0;
let Score2 = 0;
let firstRandomNumber, secondRandomNumber;

document.querySelector('.refresh').addEventListener('click', function () {
   
   if (clicks < MAX_CLICKS) {
   
   
    const firstRandomNumber = Math.floor(Math.random()*6) + 1
    const secondRandomNumber = Math.floor(Math.random()*6) + 1
   
    const firstDice = "images/dice" + firstRandomNumber + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", firstDice);

    const secondDice = "images/dice" + secondRandomNumber + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", secondDice);
    
    Score1 = parseInt(Score1) + firstRandomNumber;
    Score2 = parseInt(Score2) + secondRandomNumber;

    document.getElementById("Score1").innerHTML = Score1;
    document.getElementById("Score2").innerHTML = Score2;
    
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
   }  else if (Score1 > Score2)  {
    document.querySelector("h1").innerHTML = "Player 1 wins the Jackpot";
    } else {document.querySelector("h1").innerHTML = "Player 2 wins the Jackpot"; 
    }
   
  });

function resetButton() {
   
        clicks = 0;
        Score1 = 0;
        Score2 = 0;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("Score1").innerHTML = Score1;
        document.getElementById("Score2").innerHTML = Score2;
        document.getElementById("Heading").innerHTML = "Welcome to Online DICE GAME"
} 

