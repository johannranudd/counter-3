const daysDiv = document.querySelector(".days h2");
const secondsDiv = document.querySelector(".seconds h2");

function getTimeAndDate() {
  const now = new Date();
  const day = new Date().getDay();
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  const countDownDate = new Date(now.getTime() + 1);
  console.log(countDownDate);

  //   console.log(countDownDate);

  //   const giveawayDate = now + 10;
  //   console.log(giveawayDate);seconds;
}

setInterval(function () {
  getTimeAndDate();
}, 1000);
