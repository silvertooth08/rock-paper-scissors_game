"use strict"


const quartzButton = document.getElementById("Quartz")
quartzButton.addEventListener('click',selectionHandler);
const parchmentButton = document.getElementById("Parchment");
parchmentButton.addEventListener('click',selectionHandler);
const shearsButton = document.getElementById("Shears");
shearsButton.addEventListener('click',selectionHandler);
const body = document.querySelector("body")

const gameOverMessage = document.createElement("h3")
function selectionHandler (e) {
   itemPlayer= e.target.id
   itemComputer= chooseComputer();
   checkWinner();
   getScore();
   if (playerWins >= 5 || computerWins >= 5 ) {
       quartzButton.disabled = true
       parchmentButton.disabled = true
       shearsButton.disabled=true
       if (playerWins > computerWins){
         gameOverMessage.textContent= "Congratulations! You won the game,Pops is very happy and safe now!"
       }
       if (computerWins > playerWins){
        gameOverMessage.textContent="Oh no! You have lost the game! Now Pops is in great agony and crying!"
       }
   }
}

const roundResultMessage = document.createElement("p")
const resultContainer = document.createElement("div");
resultContainer.classList.add('container')




function chooseComputer() {
    let itemComputer;
    const items = ["Quartz", "Parchment", "Shears"];
    itemComputer = items[Math.floor(Math.random() * 3)];
    return itemComputer;
};

let itemPlayer;
let itemComputer;

let roundCount = 0;
let playerWins = 0;
let computerWins = 0;

function checkWinner() {
    if (itemComputer === itemPlayer) {
        roundResultMessage.innerText = "Tie!";
        resultContainer.appendChild(roundResultMessage);
        roundCount++
    }
    //Computer Winning Conditions
    if ((itemPlayer === "Quartz") && (itemComputer === "Parchment")) {
        roundResultMessage.innerText = "Parchment covers Quartz! You lost!";
        resultContainer.appendChild(roundResultMessage);
        roundCount++
        return   computerWins++
    }
    if ((itemPlayer === "Shears") && (itemComputer === "Quartz")) {
        roundResultMessage.innerText = "Quartz crushes Shears! You lost!";
        resultContainer.appendChild(roundResultMessage);
        roundCount++
        return  computerWins++
    }
    if ((itemPlayer === "Parchment") && (itemComputer === "Shears")) {
        roundResultMessage.innerText = "Shears cuts Parchment! You lost!";
        resultContainer.appendChild(roundResultMessage);
        roundCount++
        return    computerWins++
    }
    //Player Winning Conditions
    if ((itemComputer === "Quartz") && (itemPlayer === "Parchment")) {
        roundResultMessage.innerText = "Parchment covers Quartz! You won!";
        resultContainer.appendChild(roundResultMessage);
        roundCount++
        return  playerWins++
    }
    if ((itemComputer === "Shears") && (itemPlayer === "Quartz")) {
        roundResultMessage.innerText = "Quartz crushes Shears! You won!";
        resultContainer.appendChild(roundResultMessage);
        roundCount++
        return   playerWins++
    }
    if ((itemComputer === "Parchment") && (itemPlayer === "Shears")) {
        roundResultMessage.innerText = "Shears cuts Parchment! You won!";
        resultContainer.appendChild(roundResultMessage);
        roundCount++
        return playerWins++
    }
}
body.appendChild(resultContainer)
const scoreBoard = document.createElement("h3")

function getScore() {
    
    scoreBoard.textContent=`Round:  ${roundCount}  Player wins:   ${playerWins}  Computer wins:  ${computerWins}`
}

body.appendChild(scoreBoard)

body.appendChild(gameOverMessage)



document.querySelector(".start-button").addEventListener("click", playStart);
        
function playStart() {
    const buttonPress = document.getElementById("start-sound");
    buttonPress.play();
}

quartzButton.addEventListener("mouseover", playSound);
shearsButton.addEventListener("mouseover", playSound);
parchmentButton.addEventListener("mouseover", playSound);
        
function playSound() {
    const audio = document.getElementById("hover");
    audio.play();
}

