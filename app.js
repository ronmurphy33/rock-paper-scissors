let playerScore = 0;
let computerScore = 0;
let round = 0;
let playerChoice = prompt('rock, paper, or scissors?').toLowerCase();
let computerChoice = getComputerChoice();

function getComputerChoice(){
    let choicesArr = ['rock', 'paper', 'scissors'];
    return choicesArr[Math.floor(Math.random()*3)]
}

function playRound(playerChoice, computerChoice){
    console.log('player: '+ playerChoice);
    console.log('computer: '+ computerChoice); 
    if (playerChoice == computerChoice){
        return ('Tie! Try again');
    } else 
    if (((playerChoice ==='rock' && computerChoice === 'scissors'))
    || (playerChoice === 'paper' && computerChoice === 'rock')
    || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        playerScore++;
        return ('You win! '+playerChoice+ ' beats '+ computerChoice)
    } else ;
    computerScore ++;
    return ("You lose! "+computerChoice+ " beats "+playerChoice)
};

function playGame(){
    for (var i = 0; i < 6; i++){
        playRound();
    }
}

playGame();
