const timeEle = document.querySelector(".time");
const timeMaEle = document.querySelector(".time-ma");
const secEle = document.querySelector(".sec");
const dateEle = document.querySelector(".date");

const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC",
];

function getMyDate() {
  let date, week, month, year, day, tempHour, hour, min, sec, ma;
  setInterval(() => {
    date = new Date();
    week = weeks[date.getDay()];
    month = months[date.getMonth()];
    year = date.getFullYear();
    day = date.getDate();
    tempHour = date.getHours();
    hour = tempHour <= 12 ? tempHour : tempHour - 12;
    min = date.getMinutes();
    min = min < 10 ? `0${min}` : min;
    sec = date.getSeconds();
    sec = sec < 10 ? `0${sec}` : sec;
    ma = tempHour < 12 ? "AM" : "PM";

    // secEle.classList.remove('sec-trans');
    // setTimeout(() => {
    //   secEle.classList.add('sec-trans');      
    // }, 800);
    timeMaEle.textContent = ma;
    timeEle.textContent = `${hour}:${min}`;
    secEle.textContent = sec;
    dateEle.textContent = `${week}, ${day} ${month} ${year}`;
  }, 1000);
}

getMyDate();
