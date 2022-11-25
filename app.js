function getComputerChoice(){
    let choicesArr = ['rock', 'paper', 'scissors'];
    return choicesArr[Math.floor(Math.random()*3)]
}

function playRound(){
    let playerChoice = prompt('rock, paper, or scissors?').toLowerCase();
    let computerChoice = getComputerChoice();
    console.log('player: '+ playerChoice);
    console.log('computer: '+ computerChoice); 
    if (playerChoice == computerChoice){
        console.log('Tie! Try again')
    } else 
    if (((playerChoice ==='rock' && computerChoice === 'scissors'))
    || (playerChoice === 'paper' && computerChoice === 'rock')
    || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        console.log('You win! '+playerChoice+ ' beats '+ computerChoice)
    } else 
    console.log("You lose! "+computerChoice+ " beats "+playerChoice);
};

playRound();