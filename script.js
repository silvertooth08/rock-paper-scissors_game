"use strict";
// 1. Player should be able to decide rock,paper or scissors regardless of their case 
//don't forget to store it in a variable
let itemPlayer = "";

function choosePlayer () {
    // This part takes the player input
    let itemPlayer = prompt("Please choose among Rock,Paper or Scissors","");
    // This part converts case insensitive
    
    let caseLower = itemPlayer.toLowerCase();
    let capitalLetter= itemPlayer.charAt(0);
    let caseInsensitive = capitalLetter.toUpperCase()+caseLower.slice(1);
    return caseInsensitive;
}

// 2. Computer should be able to pick Rock,paper,scissors randomly and store it in a variable
let itemComputer = "";

function chooseComputer () {
    const items= ["Rock","Paper","Scissors"];
    let itemComputer = items[Math.floor(Math.random()*3)];
    return itemComputer;
};


//a single round of Game

function round () {
    
    itemPlayer= choosePlayer();
    itemComputer=chooseComputer();
    checkWinner();
    //let messageResult = checkWinner();
    getScore();
    console.log(score.join(""));;
}


//3. Check the decisions of player and Computer in terms of items    


// const itemPool =[Paper,Rock,Scissors,Paper,Rock,Scissors];

function isRock (item) {
    return item==="Rock";
    
}

function isScissors (item){
    return item === "Scissors";
}

function isPaper (item){
    return item === "Paper";
}


// Decision of the winner 

function checkWinner (comp,player) {
    if (itemComputer === itemPlayer){
        return  "Tie!";
    }
    //Computer Winning Conditions 
    if (isRock(itemPlayer) && isPaper(itemComputer)) {
        return "Paper beats Rock! You lost!"; 
    }
    if (isScissors(itemPlayer) && isRock(itemComputer)) {
        return "Rock beats Scissors! You lost!";
    }
    if (isPaper(itemPlayer) && isScissors(itemComputer)){
        return "Scissors beats Paper! You lost!";
    }
    //Player Winning Conditions
    if (isRock(itemComputer) && isPaper(itemPlayer)) {
        return "Paper beats Rock! You won!";
    }
    if (isScissors(itemComputer) && isRock(itemPlayer)){
        return "Rock beats Scissors! You won!";
    }
    if(isPaper(itemComputer) && isScissors(itemPlayer)){
        return "Scissors beats Paper! You won!";
    }
}

// let playerScore = 0;
// let computerScore = 0;

//4.Winner should be stored in Player or Computer side
let score = ["Round: ",0 , "  Player Score : ",0," | ",0," : Computer Score"];
function getScore() {
    let messageResult = checkWinner();
    console.log(messageResult);
    if (messageResult.slice(-8) === "You won!" ) {
        let result =  score[3] += 1
        score[1] += 1;
        return result;
    }
    if (messageResult.slice(-9) === "You lost!") {
        let result=  score[5] += 1
        score[1] += 1;
        return result;
    }
    if (messageResult === "Tie!") {
        let result = score [1] += 1;
        return result;
    }
}
// score [1] contols round numbers , score[3] controls player wins 
//score [5]controls computer wins
// console.log(messageResult);
// console.log(score.join(""));

//5. Making a 5 round game with recursion

function playGame () {
    for (let i = 0; i < 5 ;i++ ) {
        round();
    }
}


playGame();

