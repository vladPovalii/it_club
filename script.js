const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

const updateCoutdown = () => {
    // отримати фінальну дату в мілісекундах
    const finalTime = new Date('2024-03-09T12:00:00').getTime();

    // отримати поточну дату в мілісекундах
    const currentTime = Date.now();

    const diff = finalTime - currentTime;

    // різницю конвертувати в дні, години, хвилини, ...
    const days = Math.floor(diff / MS_DAY);
    const hours = Math.floor((diff % MS_DAY) / MS_HOUR)
    const minutes = Math.floor((diff % MS_HOUR) / MS_MINUTE)
    const seconds = Math.floor((diff % MS_MINUTE) / MS_SECOND)

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

function main() {
    updateCoutdown();

    setInterval(updateCoutdown, 1000);

}

window.addEventListener("load", main);