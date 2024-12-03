function getComputerChoice() {
    //generates a random number between 0 and 2
    const randomNumber = Math.floor(Math.random()*100)%3;
    //the choice of the computer in terms of: 'rock', 'paper', or 'scissors'
    let computerChoice;
    switch (randomNumber) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice, choices;
    while (!humanChoice || humanChoice > 3 || humanChoice < 1){
        humanChoice = prompt('enter the number corrosponding to the following choices\n1-paper\n2-rock\n3-scissors',);
    }
    humanChoice = Math.floor(humanChoice) - 1; 
    choices = ['paper','rock','scissors'];
    return choices[humanChoice];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('its a draw!');
    } else if (humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'rock' && computerChoice === 'scissors' 
                || humanChoice === 'scissors' && computerChoice ==='paper') {
        humanScore++;
        console.log('you won!');
    } else {
        computerScore++;
        console.log('you lost!');
    }
    console.log(`human score: ${humanScore}\ncomputer score: ${computerScore}`);
}

function playGame() {
    let n = 0;
    humanScore = computerScore = 0;
    while(n < 5){
        playRound(getHumanChoice(), getComputerChoice())
        n++;
    }
    if (humanScore === computerScore) {
        console.log('the game ended with a draw');
    } else if (humanScore > computerScore) {
        console.log('you won the entire game!');
    } else {
        window.alert('you lost im sorry :(');
    }
}

let humanScore, computerScore;
playGame();

