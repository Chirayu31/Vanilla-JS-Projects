let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result_p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function convertToWord(letter) {
    if (letter == "p") return "Paper";
    if (letter == "r") return "Rock";
    if (letter == "s") return "Scissor";
}

function wins(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = ` ${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}, You Win :)`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}, You Lose :(`;
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(computerChoice)} draws with ${convertToWord(userChoice)}`;
}

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    return choices[Math.floor(Math.random() * 3)];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        // wins(user)
        case 'rs':
        case 'pr':
        case 'sp':
            wins(userChoice, computerChoice);
            break;
        // loses(user)
        case 'sr':
        case 'rp':
        case 'ps':
            lose(userChoice, computerChoice);
            break;
        //Draw
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}

rock_div.addEventListener('click', function () {
    game('r');
});

paper_div.addEventListener('click', function () {
    game('p');
});

scissor_div.addEventListener('click', function () {
    game('s');
});