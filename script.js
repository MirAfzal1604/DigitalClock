setInterval(() => {
    let day = document.querySelector(".day");
    let dateTime = document.querySelector(".dateTime");
    let clock = document.querySelector(".clock");
    let time = document.querySelector(".time");

    let date = new Date();
    let data = date.toLocaleDateString();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = "AM";

    if (hours > 6 || hours > 7 || hours > 8 || hours > 9 || hours > 10 || hours > 12 || hours > 13 || hours > 14 || hours > 15 || hours > 16 || hours > 17 || hours >= 18) {
        clock.style.backgroundImage = "url('./moon.jpg')";
    } else {
        clock.style.backgroundImage = "url('./sun.jpg')";
    }

    if (hours > 12) {
        period = "PM";
        hours = hours - 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    day.textContent = `${data}`;
    dateTime.textContent = `${hours} : ${minutes} : ${seconds} ${period}`;
});