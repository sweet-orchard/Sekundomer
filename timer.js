const displayHours = document.getElementById("displayHours");
const displayMinutes = document.getElementById("displayMinutes");
const displaySeconds = document.getElementById("displaySeconds");
const displayMiliseconds = document.getElementById("displayMiliseconds");

let timer = null;
let startTime = 0;
let pastTime = 0;
let isRunning = true;

function start(){
    if(!isRunning){
        startTime = Date.now() - pastTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        pastTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    pastTime = 0;
    isRunning = true;

    displayHours.textContent = "00";
    displayMinutes.textContent = "00";
    displaySeconds.textContnet = "00";
    displayMiliseconds.textContent = "00";
}

function update(){
    const currentTime = Date.now();
    pastTime = currentTime - startTime;
    let hours = Math.floor(pastTime / (1000 * 60 * 60));
    let minutes = Math.floor((pastTime / (1000 * 60) % 60));
    let seconds = Math.floor((pastTime / 1000) % 60);
    let miliseconds = Math.floor(pastTime % 1000 / 10);

    displayHours.textContent = hours;
    displayMinutes.textContent = minutes;
    displaySeconds.textContnet = seconds;
    displayMiliseconds.textContent = miliseconds;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

}