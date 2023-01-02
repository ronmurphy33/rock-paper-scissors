let playerScore = 0;
let computerScore = 0;
let round = 1;
let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

function getComputerChoice(){
    let choicesArr = ['rock', 'paper', 'scissors'];
    return choicesArr[Math.floor(Math.random()*3)]
}

function getPlayerChoice(){
    let choice = prompt('rock, paper, or scissors?');
    return choice.toLowerCase();
}

function gameEnd(){
    if (playerScore > computerScore){
        console.log('You win '+playerScore+' to '+computerScore+'. Thanks for playing!')
    } else 
    if (playerScore === computerScore){
        console.log('Its a tie! Thanks for playing')
    } else 
    {
        console.log ('You lose '+playerScore+' to '+computerScore+'submit to your machine overlord')
    }
}

function playRound(playerChoice, computerChoice){
    console.log('player: '+ playerChoice);
    console.log('computer: '+ computerChoice); 
    if (playerChoice == computerChoice){
        console.log(('Tie! Try again'));
        return 'tie';
    } else 
    if (((playerChoice ==='rock' && computerChoice === 'scissors'))
    || (playerChoice === 'paper' && computerChoice === 'rock')
    || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(('You win! '+playerChoice+ ' beats '+ computerChoice));
        return 'player';
    } else ;
    console.log(("You lose! "+computerChoice+ " beats "+playerChoice));
    return 'computer';
};

function playGame(){
    for (var i = 0; i < 5; i++){
        let results = playRound(getPlayerChoice(), getComputerChoice());
        if (results == "computer"){
            computerScore ++
        } else 
        if (results == "player"){
            playerScore ++
        }
    console.log ('Player: '+playerScore+' Computer: '+computerScore+ ' Rounds left: '+(5-round));
    round++;
    }
    gameEnd();
}

playGame();