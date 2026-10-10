let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options [randidx];
}

const drawgame = () => {
     msg.innerText = "Game Was Draw Play Again";
     msg.style.backgroundcolor = "#081b31"
}
const showWinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundcolor = "green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
         msg.innerText = `you lose. ${compchoice} beats your ${userchoice}`
         msg.style.backgroundcolor = "red"
    }
}

const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    

    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
             userwin = compchoice === "paper"? false : true;
        }else if (userchoice === "paper") {
            userwin = compchoice === "scissor"? false : true;
        } else{
             userwin = compchoice === "rock"? false : true
        }
        showWinner(userwin, userchoice, compchoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    });
});