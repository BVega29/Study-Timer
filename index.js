/*let startSchool
 
 function Start() {
    document.getElementById('status').innerText = 'Shall we 😉'
    setTimeout(() => {
    document.getElementById('status').innerText = 'Almost there 🫠'
    }, 60*60*1000)
    setTimeout(() => {
    document.getElementById('status').innerText = 'Time for a break. You deserve it 🥳'
    }, 60*2000)
}

let stopSchool
 function Stop() {
    document.getElementById('status').innerText = 'Timer stopped..... Why tho????'
}

function addTime() {
    const timeToAdd = 10; // Add 10 seconds
    seconds += timeToAdd;
    updateDisplay();
}

let resfresh
 function Refresh() {
 document.getElementById('status').innerText = 'Time to start 😀'
} */

/*---------------------------*/
let timer;
let running = false;
let seconds = 0;
const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const addTimeBtn = document.getElementById('addTimeBtn');

function updateDisplay() {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    // Format minutes and seconds to always show two digits (e.g., 05:01)
    display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startStop() {
    if (running) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        // Start the interval that decrements the seconds every 1000ms (1 second)
        timer = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                updateDisplay();
            } else {
                clearInterval(timer);
                running = false;
                startStopBtn.textContent = 'Start';
                alert("Timer finished 😀");
            }
        }, 1000);
        startStopBtn.textContent = 'Stop';
    }
    running = !running;
}

function reset() {
    clearInterval(timer);
    running = false;
    seconds = 0; // Set initial time here (e.g., 60 for 1 minute)
    updateDisplay();
    startStopBtn.textContent = 'Start';
}

// Function to add time
function addTime() {
    const timeToAdd = 120; // Add 10 seconds
    seconds += timeToAdd;
    updateDisplay();
}

// Event Listeners
startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
addTimeBtn.addEventListener('click', addTime);

// Clears timer and starts back at '0'
reset();