function gameInput() {
    const userPromptBefore = prompt("Please input Rock, Paper, or Scissors: ");
    const userPrompt = userPromptBefore.toLowerCase();

    if(userPrompt === "rock" || userPrompt === "paper" || userPrompt === "scissors" ){
        return userPrompt;
    }
    else{
        alert("Incorrect input. Please enter a valid option...")
        return gameInput();
    }
}

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

function winner(){
    let user = gameInput();
    let computer = botOption();

    console.log("You Chose: " + user);
    console.log("The Computer Chooses: " + computer);

    if (user === computer){
        return "You tied!";
    }
    else if (user === "rock" && computer === "scissors"){
        return "You Win!";
    }
    else if (user === "rock" && computer === "paper"){
        return "You Lose...";
    }
    else if (user === "paper" && computer === "rock"){
        return "You Win!";
    }
    else if (user === "paper" && computer === "scissors"){
        return "You Lose...";
    }
    else if (user === "scissors" && computer === "paper"){
        return "You Win!";
    }
    else if (user === "scissors" && computer === "rock"){
        return "You Lose...";
    }

}

window.onload = function() {
    // console.log("You Chose: " + gameInput());
    // console.log("The Computer Chooses: " + botOption());
    console.log(winner());
};
