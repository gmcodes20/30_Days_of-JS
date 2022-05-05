const secondsHand = document.querySelector(".seconds-hand"),
  minuteHand = document.querySelector(".mins-hand"),
  hourHand = document.querySelector(".hour-hand");

setInterval(setDate, 1000);

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  const minute = now.getMinutes();
  const minuteDegree = (minute / 60) * 360 + 90;
  const hour = now.getHours();
  const hourDeg = (hour / 12) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}
