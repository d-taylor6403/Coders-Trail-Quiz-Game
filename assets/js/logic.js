//Uses querySelector to select the elements by their ids
let formEl = document.querySelector("#task-form");
let gameIntro = document.querySelector(".game-intro");
let gameGreeting = document.querySelector(".game-greeting");
let gameStart = document.getElementById(".start");
let timerEl = document.querySelector(".timer");



function gameIntroForm(event) {
    event.preventDefault();
    let playerName = document.querySelector("input[name='player-name']").value;

    //check if input is empty
    if (!playerName) {
        alert("A player name is required!");
        return false;
    };

    console.log("player name is: " + playerName);

    gameIntro.setAttribute("style", "visibility: hidden");
    
    gameGreeting.setAttribute("style", "visibility: visible");

    document.getElementById("player-greeting").innerHTML = `Greetings ${playerName}!`;

};

//setting countdown time
function countdown() {
    let timeLeft = 75;
    console.log(timeLeft);

    let timeInterval = setInterval(function() {
        //as long as the 'timeLeft' is greater than 1
        if (timeLeft > 0) {
            //set the text of the timer to show the remaining seconds
            timerEl.textContent = `${timeLeft} second(s) remaining`;
            //decrease timeLeft by 1
            timeLeft--;
        }
        else{
            //once timeLeft gets to 0, set timer to empty string
            timerEl.textContent = " ";
            //Use clearInterval to stop the timer
            clearInterval(timeInterval);
        }
    }, 2000);
}





formEl.addEventListener("submit", gameIntroForm);
gameStart.addEventListener("submit", countdown);

