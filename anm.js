let seconds = 10;
let minutes = 55;
let hours = 23;
let days = 08;
let flipped = true;
let flipped2 = true;
let flipped3 = true;

let cardsec = document.getElementById("card-sec");
let cardmin = document.getElementById("card-min");
let cardhour = document.getElementById("card-hour");
let carddays = document.getElementById("card-days");

let sec1 = document.getElementById("sec-1");
let sec2 = document.getElementById("sec-2");
let min1 = document.getElementById("min-1");
let min2 = document.getElementById("min-2");
let hour1 = document.getElementById("hour-1");
let hour2 = document.getElementById("hour-2");
let day1 = document.getElementById("day-1");
let day2 = document.getElementById("day-2");

setInterval(
  setInterval(function () {
    secondsFunction();
  }, 1000)
);
// setInterval(
//   setInterval(function () {
//     lolo2();
//   }, 60000)
// );

sec1.innerHTML = seconds;
sec2.innerHTML = seconds;
min1.innerHTML = minutes;
min2.innerHTML = minutes;
hour1.innerHTML = hours;
hour2.innerHTML = hours;
day1.innerHTML = days;
day2.innerHTML = days;

function secondsFunction() {
  // cardsec.classList.re
  cardsec.classList.toggle("trans");

  if (seconds == 0) {
    seconds = 60;
    minutesFunction();
  }
  if (flipped === true) {
    seconds -= 1;
    // if (seconds.toString().length == 2) {
    //   sec2.innerHTML = seconds;
    // } else {
    //   sec2.innerHTML = 0 + `${seconds}`;
    // }
    seconds.toString().length == 2
      ? (sec2.innerHTML = seconds)
      : (sec2.innerHTML = 0 + `${seconds}`);
    flipped = false;
  } else {
    seconds -= 1;
    seconds.toString().length == 2
      ? (sec1.innerHTML = seconds)
      : (sec1.innerHTML = 0 + `${seconds}`);
    flipped = true;
  }
}

function minutesFunction() {
  cardmin.classList.toggle("trans");

  if (minutes == 0) {
    minutes = 60;
    hoursFunction();
  }
  if (flipped2 === true) {
    minutes -= 1;
    minutes.toString().length == 2
      ? (min2.innerHTML = minutes)
      : (min2.innerHTML = 0 + `${minutes}`);
    flipped2 = false;
  } else {
    minutes -= 1;
    minutes.toString().length == 2
      ? (min1.innerHTML = minutes)
      : (min1.innerHTML = 0 + `${minutes}`);
    flipped2 = true;
  }
}

function hoursFunction() {
  cardhour.classList.toggle("trans");

  if (hours == 0) {
    hours = 24;
    daysFunction();
  }
  if (flipped3 === true) {
    hours -= 1;
    hour2.innerHTML = hours;
    flipped3 = false;
  } else {
    hours -= 1;
    hour1.innerHTML = hours;
    flipped3 = true;
  }
}
function daysFunction() {
  cardhour.classList.toggle("trans");

  if (days == 0) {
    days = 24;
  }
  if (flipped3 === true) {
    hours -= 1;
    hour2.innerHTML = hours;
    flipped3 = false;
  } else {
    hours -= 1;
    hour1.innerHTML = hours;
    flipped3 = true;
  }
}
