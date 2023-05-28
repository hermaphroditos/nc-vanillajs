
const clockTitle = document.querySelector("h2#clock");
const todayInfo = document.querySelector("h3#today");

function getDayOfWeek(day) {
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return dayOfWeek[day];
}

function clock() {
  const date = new Date();
  // today info
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dayOfWeek = getDayOfWeek(date.getDay());
  const today = `${year}.${month}.${day}, ${dayOfWeek}`;
  todayInfo.innerText = today;
  // clock
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;
  clockTitle.innerText = time;
}

function init() {
  setInterval(clock, 1000);
}

clock();
init();