function updateclock() {
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds() + milliseconds / 1000;
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secDegrees = ((seconds / 60) * 360);
    const minDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    const hourDegrees = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30);

    document.querySelector('.sec-hand').style.transform = `rotate(${secDegrees}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${minDegrees}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(updateclock, 50);
updateclock();