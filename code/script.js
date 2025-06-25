let time = 60;       // Game timer (seconds)
let score = 0;       // Player's score
let targetNum;       // Target number to match

// Generates 192 bubbles with random numbers between 0-9
function createBubbles() {
    let bubbles = "";
    for (let i = 0; i < 192; i++) {
        bubbles += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = bubbles;
}

// Starts countdown timer and clears bubbles when time runs out
function startTimer() {
    const timerInterval = setInterval(() => {
        if (time > 0) {
            document.querySelector(".timeid").textContent = --time;
        } else {
            clearInterval(timerInterval);
            document.querySelector(".pbtm").innerHTML = "";  // Clear bubbles when time is up
        }
    }, 1000);
}

// Sets a new target number and updates the display
function setTarget() {
    targetNum = Math.floor(Math.random() * 10);
    document.querySelector(".hit").textContent = targetNum;
}

// Updates score display and increments score by 10
function updateScore() {
    document.querySelector(".sc").textContent = score += 2;
}

// Checks if clicked bubble matches target and updates game accordingly
document.querySelector(".pbtm").addEventListener("click", (event) => {
    if (Number(event.target.textContent) === targetNum) {
        updateScore();
        createBubbles();
        setTarget();
    }
});

// Initialize the game
startTimer();
createBubbles();
setTarget();
