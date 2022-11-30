const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const panel = document.querySelector('.christmas-panel');

// xmas day
const endDAte = new Date('December 25 2022');

const endDateInMs = endDAte.getTime();

// Create a table to transform all in Ms
const secondsInMs = 1000;
const minutesInMs = 60 * secondsInMs;
const hoursInMs = 60 *  minutesInMs;
const daysInMs = 24 * hoursInMs;

const counter = setInterval(timer,1000);

function timer(){
// Now in milliseconds
const nowInMs = new Date().getTime();

// That's the difference
const difference = endDateInMs - nowInMs;

if(difference > 0){
  // Rounded numbers
    days.innerHTML = Math.floor(difference / daysInMs);
    hours.innerHTML = Math.floor((difference % daysInMs) / hoursInMs );
    minutes.innerHTML = Math.floor((difference % hoursInMs) / minutesInMs );
    seconds.innerHTML = Math.floor((difference % minutesInMs) / secondsInMs);
}else{
    clearInterval(timer);
    panel.innerHTML = "<h1>Buon Natale!</h1>";
}
}

// Decimal result that I've to transform
console.log(difference / daysInMs);

