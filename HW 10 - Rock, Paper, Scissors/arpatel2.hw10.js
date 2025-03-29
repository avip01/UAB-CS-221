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

window.onload = function() {
    console.log("You Chose: " + gameInput());
    console.log("The Computer Chooses: " + botOption());
};
