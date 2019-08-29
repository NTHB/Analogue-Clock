const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function activateClock() {
    var date = new Date();

    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentsecond = date.getSeconds();



    let hourPosition = (currentHour*(360/12))+(currentMinute*(360/60)/12);
    let minutePosition = (currentMinute*(360/60))+(currentsecond*(360/60)/60);
    let secondPosition = currentsecond*(360/60);

    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minutePosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)";
}

var interval = setInterval(activateClock, 1000);