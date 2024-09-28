const TIME_LIMIT = 600;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
const timerElement = document.getElementById("timer");
const checkStatusElement = document.getElementById("check-status");
const paymentConfirmation = document.getElementById("payment-confirmation");
const checkmarkElement = document.getElementById("checkmark");

const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

timerElement.innerHTML = formatTime(timeLeft);

startTimer();

function startTimer() {
    timerInterval = setInterval(() => {
        timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        timerElement.innerHTML = formatTime(timeLeft);
        setCircleDashoffset();

        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }

        if (Math.random() < 0.01) { 
            showPaymentConfirmation();
            clearInterval(timerInterval);
        }
    }, 1000);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

function setCircleDashoffset() {
    const offset = circumference - (timeLeft / TIME_LIMIT) * circumference;
    circle.style.strokeDashoffset = offset;
}

function showPaymentConfirmation() {
    document.querySelector(".progress-ring__circle").style.fill = "white";
    timerElement.style.display = "none";
    checkmarkElement.style.display = "block";
    checkmarkElement.classList.add("animate");
    checkStatusElement.style.display = "none";
    paymentConfirmation.style.display = "flex";
}
