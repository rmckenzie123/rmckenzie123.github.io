var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getComputerChoice() {
    var choices = ['r','p','s'];
    var randomNumber = Math.floor(Math.random()* 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    console.log("win");
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    var smallUserWord = "(you)".fontsize(3).sub();
    var smallCompWord = "(comp)".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} You win!`;   
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    var smallUserWord = "(you)".fontsize(3).sub();
    var smallCompWord = "(comp)".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to  ${convertToWord(computerChoice)}${smallCompWord} You lose!`;   
}
function draw(userChoice, computerChoice){
    var smallUserWord = "(you)".fontsize(3).sub();
    var smallCompWord = "(comp)".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} doesnt beat ${convertToWord(computerChoice)}${smallCompWord} it's a draw`;  
}

function game(userChoice) {
    var computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":   
        case "ps":
        case "sr":    
            lose(userChoice, computerChoice);
            break;
        case "rr":   
        case "pp":
        case "ss":    
            draw(userChoice, computerChoice);
            break;
    }
}
   

function main(){
rock_div.addEventListener('click', function() {
    game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
})
}

main();



