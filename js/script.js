// const daysDiv = document.querySelector(".days h2");
// const secondsDiv = document.querySelector(".seconds h2");
// let cdDate = new Date("SEP 12, 2021 20:38:00").getTime();

// function getTimeAndDate() {
//   const now = new Date().getTime();

//   const distance = cdDate - now;

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   const daysConter = document.querySelector(".days h2");
//   const hoursConter = document.querySelector(".hours h2");
//   const minutesConter = document.querySelector(".minutes h2");
//   const secondsConter = document.querySelector(".seconds h2");

//   daysConter.innerHTML = days;
//   hoursConter.innerHTML = hours;
//   minutesConter.innerHTML = minutes;
//   secondsConter.innerHTML = seconds;

//   if (distance <= 10) {
//     const d = new Date();
//     d.setDate(d.getDate() + 10);
//     cdDate = d;
//   }
// }

// // getTimeAndDate();

// setInterval(function () {
//   getTimeAndDate();
// }, 1000);

// !test

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "now",
  "dec",
];

const daysList = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const daysConter = document.querySelector(".days h2");
const hoursConter = document.querySelector(".hours h2");
const minutesConter = document.querySelector(".minutes h2");
const secondsConter = document.querySelector(".seconds h2");
const info = document.querySelector(".info h4");

// window.addEventListener("DOMContentLoaded", getTimeAndDate);
let cdDate = new Date("SEP 12, 2021 21:07:30");

function getTimeAndDate() {
  const now = new Date().getTime();

  const distance = cdDate - now;

  const textDay = cdDate.getDay();
  const textMonth = cdDate.getMonth() + 1;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysConter.innerHTML = (days < 10 ? "0" : "") + days;
  hoursConter.innerHTML = (hours < 10 ? "0" : "") + hours;
  minutesConter.innerHTML = (minutes < 10 ? "0" : "") + minutes;
  secondsConter.innerHTML = (seconds < 10 ? "0" : "") + seconds;

  info.innerHTML = `Giveaway Ends On ${daysList[textDay]}, ${
    (cdDate.getDay() < 10 ? "0" : "") + cdDate.getDay()
  } ${months[textMonth].toUpperCase()} ${cdDate.getFullYear()}, ${
    (cdDate.getHours() < 10 ? "0" : "") + cdDate.getHours()
  }:${(cdDate.getMinutes() < 10 ? "0" : "") + cdDate.getMinutes()}${
    cdDate.getHours() < 12 ? "am" : "pm"
  }`;

  if (distance <= 0) {
    cdDate.setDate(cdDate.getDate() + 10);
  }
}

// getTimeAndDate();

setInterval(function () {
  getTimeAndDate();
}, 10);
