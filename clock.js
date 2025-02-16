const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function setTime(){
    //Get Time
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    //Set Rotation
    const secondsRotation = seconds * 6;
    const minutesRotation = minutes * 6 + 0.1 * seconds;
    const hoursRotation = (hours % 12) * 30 + 0.5 * minutes;

    //Apply Rotation
    secondHand.style.transform = `rotate(${secondsRotation}deg)`;
    minuteHand.style.transform = `rotate(${minutesRotation}deg)`;
    hourHand.style.transform = `rotate(${hoursRotation}deg)`;
}

setInterval(setTime, 1000);