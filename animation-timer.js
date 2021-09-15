let seconds = 10;
let minutes = 55;
let hours = 03;
let days = 2;
let flipped = true;
let flipped2 = true;
let flipped3 = true;
let flipped4 = true;

let dayszero = false;
let hourszero = false;

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
    hoursFunction();
  }, 100)
);
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
  if (hourszero != true) {
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
}

function hoursFunction() {
  // do {
  //   cardhour.classList.toggle("trans");
  //   if (hours == 0) {
  //     hours = 24;
  //     daysFunction();
  //   } else {
  //     if (flipped3 === true) {
  //       hours -= 1;
  //       hour2.innerHTML = hours;
  //       flipped3 = false;
  //     } else {
  //       hours -= 1;
  //       hour1.innerHTML = hours;
  //       flipped3 = true;
  //     }
  //   }
  // } while (days !== 0);
}

function daysFunction() {
  if (days != 0) {
    carddays.classList.toggle("trans");
    if (days == 0) {
      days = 0;
    } else {
      if (flipped4 === true) {
        days -= 1;
        day2.innerHTML = days;
        flipped4 = false;
      } else {
        days -= 1;
        day1.innerHTML = days;
        flipped4 = true;
      }
    }
  }
}
