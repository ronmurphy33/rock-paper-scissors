function getComputerChoice(){
    const gameChoices = ['rock', 'paper', 'scissors'];
    return gameChoices[Math.floor(Math.random()*3)];
}

console.log(getComputerChoice());
let playerInput = window.prompt('rock, paper, or scissors?').toLowerCase();
console.log(playerInput);