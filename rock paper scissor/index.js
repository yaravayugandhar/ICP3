// rock 1 paper 2 scissors 3

//initial player scores
let playerScore = 0;
let computerScore = 0;

// player choice and computer choice 
let playerChoice;
let computerChoice;

// geting elements with id for score update 
let playerScoreElement = document.getElementById("playerScoreElement");
let computerScoreElement = document.getElementById("computerScoreElement");

function updatePlayerScore(){
playerScoreElement.textContent = playerScore;
computerScoreElement.textContent = computerScore;
}

updatePlayerScore();

// stop displaying output text 
 let gameStatusContainer = document.getElementById("gameStatusContainer");
 gameStatusContainer.style.display = "none";

 // get computer choice text and player choice text
 let computerChoiceText = document.getElementById("computerChoiceText");
 let playerChoiceText = document.getElementById("playerChoiceText"); 
let gameStatusText = document.getElementById("gameStatusText");
 function displayStatusText(){
    gameStatusContainer.style.display = "block";
    computerChoiceText.textContent = computerChoice;
    playerChoiceText.textContent = playerChoice;

    gameStatusText.textContent = gameOutputText;
 }

// geting elements with id for button 

let rockButtonElement = document.getElementById("rockButtonElement");
let paperButtonElement = document.getElementById("paperButtonElement");
let scissorsButtonElement = document.getElementById("scissorsButtonElement");

// playee nymber and computer number 
let playerNumber;
let computerNumber;

// game status text 
let gameOutputText;


rockButtonElement.onclick = ()=>{
    playerNumber = 1;
    playerChoice = "Rock";
    // generate Random computer number 
    computerNumber = Math.floor(Math.random()*3)+1;

    if(playerNumber === computerNumber){
        gameOutputText = "Game is Tie !!"
        computerChoice = "Rock";
    }
    else if(playerNumber===1 && computerNumber===2){
        gameOutputText="Computer won over you !!";
        computerScore = computerScore + 1;
        computerChoice = "paper";
    }
    else if(playerNumber===1 && computerNumber===3){
        gameOutputText = "Player won over computer !!";
        playerScore = playerScore + 1;
        computerChoice = "scissors";
    }

    updatePlayerScore();
    displayStatusText();
}

paperButtonElement.onclick = ()=>{
    playerNumber = 2;
    playerChoice = "paper";
    // generate Random computer number 
    computerNumber = Math.floor(Math.random()*3)+1;

    if(playerNumber === computerNumber){
        gameOutputText = "Game is Tie !!"
        computerChoice = "paper";
    }
    else if(playerNumber===2 && computerNumber===1){
        gameOutputText="Computer won over you !!";
        computerScore = computerScore + 1;
        computerChoice = "rock";
    }
    else if(playerNumber===2 && computerNumber===3){
        gameOutputText = "Player won over computer !!";
        playerScore = playerScore + 1;
        computerChoice = "scissors";
    }

    updatePlayerScore();
    displayStatusText();
}

scissorsButtonElement.onclick = ()=>{
    playerNumber = 3;
    playerChoice = "scissors";
    // generate Random computer number 
    computerNumber = Math.floor(Math.random()*3)+1;

    if(playerNumber === computerNumber){
        gameOutputText = "Game is Tie !!"
        computerChoice = "scissors";
    }
    else if(playerNumber===3 && computerNumber===1){
        gameOutputText="Computer won over you !!";
        computerScore = computerScore + 1;
        computerChoice = "rock";
    }
    else if(playerNumber===3 && computerNumber===2){
        gameOutputText = "Player won over computer !!";
        playerScore = playerScore + 1;
        computerChoice = "paper";
    }

    updatePlayerScore();
    displayStatusText();
}

