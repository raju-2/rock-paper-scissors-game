let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissor = document.querySelector("#scissors")
let winner = document.querySelector(".winner")
let  result = document.querySelector("#result")
let computer_scr = document.querySelector("#computer-score")
let player_scr = document.querySelector("#player-score")
let final = document.querySelector(".final")


let choices = ["rock", "paper" , "scissor"]
let player = ""; // Store player's choice
let computer = ""; // Store computer's choice
let pscore = 0;
let cscore = 0;



rock.addEventListener("click", () => {
    player = "rock";
    playGame();
});
console.log(player)

paper.addEventListener("click", () => {
    player = "paper";
    playGame();
});

scissor.addEventListener("click", () => {
    player = "scissor";
    playGame();
});

// Function to get computer's choice
function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    return choices[randomIndex]; // Picks 'rock', 'paper', or 'scissors'
}
function playGame() {
    computer = computerChoice()
    console.log("player: ",player)
    console.log("computer:",computer)
    result.innerHTML = "Computer: " + computer + "<br>Player: " + player; 
    

    if(computer== player){
        console.log("Game is Drawn")
        winner.innerHTML= "Game is Drawn"
        
    }
    else if((player=="rock" && computer=="scissor")|| 
            (player=="paper" && computer=="rock") || 
            (player=="scissor" && computer == "paper")){
                console.log("Player won")
                winner.innerHTML = "Player won"
                pscore = pscore +1
                player_scr.innerHTML = pscore
                console.log(pscore)
    }
    else{
        console.log("Computer won")
        winner.innerHTML = "Computer won"
        cscore = cscore+1
        computer_scr.innerHTML =cscore
        console.log(cscore)
    }

}
