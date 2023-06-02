const startStopBtn = document.querySelector('#startStopBtn');

const resetBtn = document.querySelector("#resetBtn");

// timer variables 
let seconds = 0;
let minutes = 0;
let hours = 0;

// variables  with leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


let timerInterval = null;
let timerStatus = 'stopped';


// display timer

function stopWatch(){
    seconds++
    if (seconds/60 === 1){
        seconds = 0;
        minutes++;

        if (minutes/60 === 1){
            minutes = 0;
            hours++
        }
    }
    if (seconds < 10){
        leadingSeconds = '0' + seconds.toString()
    } else {
        leadingSeconds = seconds
    }
    if (minutes < 10){
        leadingMinutes = '0' + minutes.toString()
    }
    else {
        leadingMinutes = minutes
    }
    if (hours < 10){
        leadingHours = '0' + hours.toString()
    }
    else {
        leadingHours = hours
    }
    let displayTimer = document.querySelector('#timer').innerText = leadingHours +':' + leadingMinutes + ':' + leadingSeconds;
}

startStopBtn.addEventListener('click', playButton);
resetBtn.addEventListener('click', resetButton);

function playButton(e){
    if  (timerStatus === 'stopped'){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.querySelector('#startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = 'started';

    } else {
        window.clearInterval(timerInterval);
        document.querySelector('#startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = 'stopped';
    }

}

function resetButton(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0 ;
    document.querySelector('#timer').innerHTML = '00:00:00';
    document.querySelector('#startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;

}

