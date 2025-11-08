//score access
let userScore = 0;
let compScore = 0;

//img access
let choices = document.querySelectorAll(".choice");

//msg access
const msg = document.querySelector(".msg");

//access user score
const userScorePara = document.querySelector("#user-score");

//access computer score
const compScorePara = document.querySelector("#computer-score");

//here computer generate a random choice
const genCompChoice = () => {
    const opt = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return opt[ranIdx];
};


//draw function
const drawGame = () =>{
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "green"
};

//function for show win
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin == true){
        userScore ++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "blue";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame= (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissor
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
