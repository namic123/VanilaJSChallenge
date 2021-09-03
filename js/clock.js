const jsDate = document.querySelector(".clock-js-date");
const jsClock = document.querySelector(".clock-js-clock");
const jsDday = document.querySelector(".clock-js-d-day");

function setDay() {
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const dayOfWeek = week[new Date().getDay()];
    return dayOfWeek;
}

function setDate() {
    const newDate = new Date();
    const month = newDate.getMonth() + 1;
    const date = newDate.getDate();

    jsDate.innerText = `${month}월 ${date}일 ${setDay()}요일`;
}

function setClock() {
    const newClock = new Date();
    const hours = String(newClock.getHours()).padStart(2, "0");
    const minutes = String(newClock.getMinutes()).padStart(2, "0");
    const seconds = String(newClock.getSeconds()).padStart(2, "0");

    jsClock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function newYearTikTok() {
    const today = new Date();
    const newYears = new Date(2022, 1, 1);
    const dayGap = newYears.getTime() - today.getTime();
    const dayResult = String(Math.floor(dayGap / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const hourResult = String(Math.floor(dayGap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).padStart(2, "0");
    const minuteResult = String(Math.floor(dayGap % (1000 * 60 * 60) / (1000 * 60))).padStart(2, "0");
    const secondResult = String(Math.floor(dayGap % (1000 * 60) / (1000))).padStart(2, "0");
    jsDday.innerHTML = `New Years Dday = ${dayResult} D ${hourResult} H ${minuteResult} M ${secondResult} S`

}

setDate();
setInterval(setDate, 1000);
setClock();
setInterval(setClock, 1000);
newYearTikTok();
setInterval(newYearTikTok, 1000);