const firstRandomNumber = Math.floor(Math.random()*6) + 1
const firstDice = "images/dice" + firstRandomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", firstDice);


const secondRandomNumber = Math.floor(Math.random()*6) + 1
const secondDice = "images/dice" + secondRandomNumber + ".png";
document.querySelectorAll("img")[1].setAttribute("src", secondDice);

let MAX_COUNTER = 10;
let clicks = 0;
let Score1 = 0;
let Score2 = 0;
let counter = 0;

function mouseClick() {
    location.reload();
    
    // let Score1 = localStorage.getItem("Score1");
    // Score1 = parseInt(Score1) + firstRandomNumber;
    // localStorage.setItem("Score1", Score1");
    
    // document.getElementById("Score1").innerHTML = Score1;
    // counter += 1;
    // } else {counter = 0; Score1 = 0;
    // document.getElementById("Score1").innerHTML = Score1;
    // }
}

function initiateClicks() {
    let clickStr = localStorage.getItem("clicks");
    let Score1 = localStorage.getItem("Score1");
    // let Score2 = localStorage.getItem("Score2");
    if(clickStr == undefined){
        localStorage.setItem("clicks", 0);
        clicks = 0;
    }else{
        clicks = parseInt(clickStr);  
        // Score1 = parseInt(Score1) + firstRandomNumber;
    }   document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("Score1").innerHTML = Score1;
    // document.getElementById("Score2").innerHTML = Score2;
    
        // if(Score1 == undefined) {
    //     localStorage.setItem("Store1", 0);
    //     Store1 = 0
    // }   else {
        // Score1 = parseInt(Score1) + firstRandomNumber;
        // localStorage.setItem("Score1", Score1");
        // document.getElementById("Score1").innerHTML = Score1;
    // }
    
    // Score1 = parseInt(Score1) + firstRandomNumber;
        // document.getElementById("Score1").innerHTML = Score1;
        
    
    
}

function doClick() {
    if (clicks < 10) {
    clicks += 1;
    localStorage.setItem("clicks", clicks);
    document.getElementById("clicks").innerHTML = clicks;
    
    localStorage.setItem("Score1", Score1);
    Score1 = parseInt(Score1) + firstRandomNumber;
    document.getElementById("Score1").innerHTML = Score1;

    // localStorage.setItem("Score2", Score2);
    // Score1 = parseInt(Score2) + secondRandomNumber;
    // document.getElementById("Score2").innerHTML = Score2;


    } else {clicks = 0; 
        Score1 = 0;
        Score2 = 0;
        document.getElementById("clicks").innerHTML = clicks;
        // document.getElementById("Score1").innerHTML = Score1;
    }
}

document.getElementById("clickButton").onclick = doClick;
initiateClicks(); 

function resetButton() {
        counter = 0;
        clicks = 0;
        Score1 = 0;
        Score2 = 0;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("Score1").innerHTML = Score1;
        document.getElementById("Score2").innerHTML = Score2;
} 

