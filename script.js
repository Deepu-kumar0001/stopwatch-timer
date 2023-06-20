let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let timer;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
    timer = setInterval(runTimer, 10);
    startBtn.disabled = true;
}

function runTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    display.innerHTML = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds / 10)}`;
}

function stopTimer() {
    clearInterval(timer);
    startBtn.disabled = false;
}

function resetTimer() {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    display.innerHTML = '00:00:00';
    startBtn.disabled = false;
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
