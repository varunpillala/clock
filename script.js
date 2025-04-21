function updateClock() {
  const now = new Date();
  const secondDeg = now.getSeconds() * 6;
  const minuteDeg = now.getMinutes() * 6 + now.getSeconds() * 0.1;
  const hourDeg = ((now.getHours() % 12) / 12) * 360 + now.getMinutes() * 0.5;

  document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // initial call
