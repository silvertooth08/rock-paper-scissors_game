"use strict";



// const { constants } = require("buffer");

// 1. Player should be able to decide rock,paper or scissors regardless of their case
// don't forget to store it in a variable

let itemPlayer;
        
        // This part takes the player input
        
    function choosePlayer() {
    let anchors = document.querySelectorAll("a");
        anchors.forEach((anchor) =>
        anchor.addEventListener("click", () => {
            anchor.id
            return itemPlayer = anchor.id;
    
        })
    )}      
        // 2. Computer should be able to pick Rock,paper,scissors randomly and store it in a variable
let itemComputer;

function chooseComputer() {
    const items = ["Rock", "Paper", "Scissors"];
    let itemComputer = items[Math.floor(Math.random() * 3)];
    return itemComputer;
};





//3. Check the decisions of player and Computer in terms of items


function isRock(item) {
    return item === "Rock";
    
}

function isScissors(item) {
    return item === "Scissors";
}

function isPaper(item) {
    return item === "Paper";
}


// Decision of the winner

function checkWinner(comp, player) {

    if (itemComputer === itemPlayer) {
        return "Tie!";
    }
    //Computer Winning Conditions
    if (isRock(itemPlayer) && isPaper(itemComputer)) {
        return "Parchment beats Quartz! You lost!";
    }
    if (isScissors(itemPlayer) && isRock(itemComputer)) {
        return "Quartz beats Shears! You lost!";
    }
    if (isPaper(itemPlayer) && isScissors(itemComputer)) {
        return "Shears beats Parchment! You lost!";
    }
    //Player Winning Conditions
    if (isRock(itemComputer) && isPaper(itemPlayer)) {
        return "Parchment beats Quartz! You won!";
    }
    if (isScissors(itemComputer) && isRock(itemPlayer)) {
        return "Quartz beats Shears! You won!";
    }
    if (isPaper(itemComputer) && isScissors(itemPlayer)) {
        return "Shears beats Parchment! You won!";
    }
}

let messageResult;

//4.Winner should be stored in Player or Computer side
let score = ["Round: ", 0, "  Player Score : ", 0, " | ", 0, " : Computer Score"];

function getScore() {
    if (messageResult.slice(-8) === "You won!") {
        let result = score[3] += 1
        score[1] += 1;
        return result;
    }
    if (messageResult.slice(-9) === "You lost!") {
        let result = score[5] += 1
        score[1] += 1;
        return result;
    }
    if (messageResult === "Tie!") {
        let result = score[1] += 1;
        return result;
    }
}

// score [1] contols round numbers , score[3] controls player wins
//score [5]controls computer wins
// console.log(messageResult);
//


//5. Making a 5 round game with recursion

// function playGame() {
    //     for (let i = 0; i < 5; i++) {
        //         round();
        //         if (score[3] === 5 || score[5] === 5) break;
        //     }
        // }
        
        
        //  playGame();
        
        
        
        
        
        //Hover sound for selection images
        document.querySelector(".images").addEventListener("mouseover", playSound);
        
        function playSound() {
            const audio = document.getElementById("hover");
            audio.play();
        }
        
        
        // // Start sound here
        document.querySelector(".start-button").addEventListener("click", playStart);
        
        function playStart() {
            const buttonPress = document.getElementById("start-sound");
            buttonPress.play();
        }
        
        
        // a single round of Game
async function playRound () {
itemPlayer = await choosePlayer();
itemComputer = chooseComputer();
checkWinner();
messageResult = await checkWinner();
getScore();
console.log(score.join(""));
}


playRound();
        
        
        
        
        // // Victory Sound here
        // function playWinSound() {
            //     const winSound = document.getElementById("winnersound");
            //     winSound.play();
            // }

            
            
            // // Lose Sound here
            // function playLoseSound() {
                //     const loseSound = document.getElementById("losersound");
                //     loseSound.play();
                // }
                
                