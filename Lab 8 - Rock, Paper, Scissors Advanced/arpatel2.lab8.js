
function botOption() {
    let computerChoice = Math.random();

    if (computerChoice <= 0.3333333){
        return "rock";
    }
    if (computerChoice <= 0.6666666){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function winner(user, computer){

    if (user === computer){
        return "You tied!";
    }
    else if ((user === "rock" && computer === "scissors") || (user === "paper" && computer === "rock") || (user === "scissors" && computer === "paper")){
        return "You Win!";
    }
    else if ((user === "rock" && computer === "paper") || (user === "paper" && computer === "scissors") || (user === "scissors" && computer === "rock")){
        return "You Lose...";
    }
}

function game(userOption) {
    let computer = botOption();
    let won = winner(userOption, computer);

    console.log("You chose " + userOption);
    console.log(", Computer chose " + computer);

    document.querySelector('.user').textContent = "You chose " + userOption; {/* https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector */}
    document.querySelector('.computer').textContent = "Computer chose " + computer; {/* https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent */}
    document.querySelector('.winner').textContent = "And the winner is... (drumroll please): " + won;

}

window.onload = function() {
    document.querySelector('.rock').addEventListener('click', function() { game("rock");});

    document.querySelector('.paper').addEventListener('click', function() { game("paper");});

    document.querySelector('.scissors').addEventListener('click', function() { game("scissors");});
};
