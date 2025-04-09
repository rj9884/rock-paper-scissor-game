let userScore = 0;
        let compScore = 0;
        const choices = document.querySelectorAll(".choice");
        const msg = document.querySelector("#msg");
        const userScorePara = document.querySelector("#user-score");
        const compScorePara = document.querySelector("#comp-score");

        choices.forEach((choice) => {
            choice.addEventListener("click", () => {
                const userChoice = choice.getAttribute("id");
                playGame(userChoice);
            });
        });

        // Generate computer choice
        const genCompChoice = () => {
            const options = ["rock", "paper", "scissors"];
            const randIndex = Math.floor(Math.random() * 3);
            return options[randIndex];
        };

        const drawGame = () => {
            msg.innerText = "Game Drawn! Play Again.";
            msg.style.backgroundColor = "#666";
        };

        const showWinner = (userWin, userChoice, compChoice) => {
            if (userWin) {
                userScore++;
                userScorePara.innerText = userScore;
                msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}.`;
                msg.style.backgroundColor = "green";
            } else {
                compScore++;
                compScorePara.innerText = compScore;
                msg.innerText = `You Lost! Computer's ${compChoice} beats your ${userChoice}.`;
                msg.style.backgroundColor = "red";
            }
        };

        const playGame = (userChoice) => {
            let compChoice = genCompChoice();
            
            if (userChoice === compChoice) {
                drawGame();
            } else {
                let userWin = true;
                if (userChoice === "rock") {
                    userWin = compChoice === "scissors" ? true : false;
                } else if (userChoice === "paper") {
                    userWin = compChoice === "rock" ? true : false;
                } else {
                    userWin = compChoice === "paper" ? true : false;
                }
                showWinner(userWin, userChoice, compChoice);
            }
        };