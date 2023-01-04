const playerScoreDom = document.querySelector('.player-score');
const computerScoreDom = document.querySelector('.computer-score');
const playerChoiceDom = document.querySelector('.player-choice');
const computerChoiceDom = document.querySelector('.computer-choice');
const gameNarratorDom = document.querySelector('.game-narrator');
const inputButtons = document.querySelectorAll('input');
const roundDom = document.querySelector('.round');


let playerScore = 0;
let computerScore = 0;
let round = 1;
let playerChoice = '';
let computerChoice = getComputerChoice();



function getComputerChoice(){
    let choicesArr = ['rock', 'paper', 'scissors'];
    return choicesArr[Math.floor(Math.random()*3)]
}

// function getPlayerChoice(){
//     let choice = prompt('rock, paper, or scissors?');
//     playerChoiceDom.textContent = choice.toLowerCase();
//     return choice.toLowerCase();
// }

function gameEnd(){
    if (playerScore > computerScore){
        console.log('You win '+playerScore+' to '+computerScore+'. Thanks for playing!')
        gameNarratorDom.textContent = 'You win '+playerScore+' to '+computerScore+'. Thanks for playing!';
    } else 
    if (playerScore === computerScore){
        console.log('Its a tie! Thanks for playing')
        gameNarratorDom.textContent = 'Its a tie! Thanks for playing';
    } else 
    {
        console.log ('You lose '+playerScore+' to '+computerScore+'  Submit to your machine overlord')
        gameNarratorDom.textContent = 'You lose '+playerScore+' to '+computerScore+'.  Submit to your machine overlords!';
    }
}

function playRound(playerChoice, computerChoice){
    console.log('player: '+ playerChoice);
    console.log('computer: '+ computerChoice); 
    playerChoiceDom.textContent = playerChoice;
    computerChoiceDom.textContent = computerChoice;
    if (playerChoice == computerChoice){
        console.log(('Tie! Try again'));
        gameNarratorDom.textContent = 'Tie! Try Again!'
        return 'tie';
    } else 
    if (((playerChoice ==='rock' && computerChoice === 'scissors'))
    || (playerChoice === 'paper' && computerChoice === 'rock')
    || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(('You win! '+playerChoice+ ' beats '+ computerChoice));
        gameNarratorDom.textContent = 'You win! '+playerChoice+ ' beats '+ computerChoice;
        return 'player';
    } else ;
    console.log(("You lose! "+computerChoice+ " beats "+playerChoice));
    gameNarratorDom.textContent = "You lose! "+computerChoice+ " beats "+playerChoice;
    return 'computer';
};

function playGame(){
        let results = playRound(playerChoice, getComputerChoice());
        if (results == "computer"){
            computerScore ++
            computerScoreDom.textContent = computerScore;
        } else 
        if (results == "player"){
            playerScore ++
            playerScoreDom.textContent = playerScore;
        }
    console.log ('Player: '+playerScore+' Computer: '+computerScore+ ' Rounds left: '+(5-round));
    if ( results != 'tie'){
        round++;
    }
    if (round <= 5){
        roundDom.textContent = 'Round ' + round + ' of 5';
    }
    if(round > 5 ){
        gameEnd();
    }
}


inputButtons.forEach((button) =>{
    button.addEventListener('click', () =>{
        playerChoice = button.classList.value;
        playGame();
    });
});

