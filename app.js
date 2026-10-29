let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreText = document.querySelector("#user");
const computerScoreText = document.querySelector("#computer");
const msg = document.querySelector("#msg");
const resetBtn = document.querySelector("#reset");

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];

    const randomIndex = Math.floor(Math.random() * 3);

    return options[randomIndex];
};

const playGame = (userChoice) => {
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        msg.innerText = `Draw! Both chose ${userChoice}`;
        msg.style.backgroundColor = "#facc15";
        msg.style.color = "#000";
    } 
    else {
        let userWin = false;

        if (userChoice === "rock") {
            userWin = computerChoice === "scissor";
        } 
        else if (userChoice === "paper") {
            userWin = computerChoice === "rock";
        } 
        else {
            userWin = computerChoice === "paper";
        }

        if (userWin) {
            userScore++;

            userScoreText.innerText = userScore;

            msg.innerText =
                `You Win! ${userChoice} beats ${computerChoice}`;

            msg.style.backgroundColor = "#16a34a";
            msg.style.color = "#fff";
        } 
        else {
            computerScore++;

            computerScoreText.innerText = computerScore;

            msg.innerText =
                `You Lose! ${computerChoice} beats ${userChoice}`;

            msg.style.backgroundColor = "#dc2626";
            msg.style.color = "#fff";
        }
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id.toLowerCase();

        playGame(userChoice);
    });
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;

    userScoreText.innerText = 0;
    computerScoreText.innerText = 0;

    msg.innerText = "Play your move!";
    msg.style.backgroundColor = "#fff200";
    msg.style.color = "#000";
});