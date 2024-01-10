let forBoxes = document.querySelectorAll(".forBtn");
let value = "X";
let forPlayerResult = document.getElementById("forPlayer");
let forNewGame = document.querySelector(".newGame");

document.getElementById("forPlayer").innerText = "Player " + value + " turn";

forBoxes.forEach((forBox) => {
    forBox.addEventListener("click", () => {

        if (forBox.innerText === "") {

            if (value === "X") {

                forBox.innerText = "X";

                value = "O";
            } else {
                forBox.innerText = "O";
                document.getElementById("forPlayer").innerText = "Player O turn";
                value = "X";

            }
            document.getElementById("forPlayer").innerText = "Player " + value + " turn";

            checkForWin();
        }
    });
});

function highlightWinningBoxes(winningCombo) {
    for (let i = 0; i < winningCombo.length; i++) {
        let index = winningCombo[i];
        forBoxes[index].classList.add("winning-box");
    }
}




function checkForWin() {
    let winningCriteria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winningCriteria.length; i++) {
        let [a, b, c] = winningCriteria[i];
        if (forBoxes[a].innerText === "X" && forBoxes[b].innerText === "X" && forBoxes[c].innerText === "X") {
            forPlayerResult.style.fontSize = "5em";
            forPlayerResult.style.backgroundColor = "#DC143C";
            forPlayerResult.style.color = "white";

            document.getElementById("forPlayer").innerText = "X won!";
            highlightWinningBoxes([a, b, c]);

            return;
        }
        if (forBoxes[a].innerText === "O" && forBoxes[b].innerText === "O" && forBoxes[c].innerText === "O") {
            forPlayerResult.style.fontSize = "5em";
            forPlayerResult.style.backgroundColor = "#DC143C";
            forPlayerResult.style.color = "white";

            document.getElementById("forPlayer").innerText = "O won!";

            highlightWinningBoxes([a, b, c]);
            return;
        }
    }


    let isDraw = true;
    for (let i = 0; i < forBoxes.length; i++) {
        if (forBoxes[i].innerText === "") {
            isDraw = false;
            break;
        }
    }

    if (isDraw) {
        forPlayerResult.style.fontSize = "5em";
        forPlayerResult.style.backgroundColor = "#DC143C";
        forPlayerResult.style.color = "white";
        document.getElementById("forPlayer").innerText = "Game withdraw!";
    }
}

function resetGame() {
    forBoxes.forEach((forBox) => {
        forBox.innerText = "";
        forBox.classList.remove("winning-box");
    });

    forPlayerResult.style.fontSize = "";
    forPlayerResult.style.backgroundColor = "";
    forPlayerResult.style.color = "";
    document.getElementById("forPlayer").innerText = "Player " + value + " turn";
}

// Event listener for the "New Game" button
forNewGame.addEventListener("click", () => {
    resetGame();
});