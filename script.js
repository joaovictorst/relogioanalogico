const digitalElement = document.querySelector(".digital");
const hour = document.querySelector(".p_h");
const min = document.querySelector(".p_m");
const sec = document.querySelector(".p_s");


function getTime() {
    const time = new Date();

    const getHour = time.getHours();
    const getMin =  time.getMinutes();
    const getSec =  time.getSeconds();

// relogio analogico
    getHourRot = ((360 / 12) * getHour) - 90;
    getMinRot = ((360 / 60) * getHour) - 90;
    getSecRot = ((360 / 60) * getSec) - 90;

    hour.style.transform = `rotate(${getHourRot}deg)`;
    min.style.transform = `rotate(${getMinRot}deg)`;
    sec.style.transform = `rotate(${getSecRot}deg)`;

// relogio digital
    digitalElement.innerHTML = `${getHour}:${getMin}:${getSec}`


}

setInterval(() => {
    getTime()
}, 1000);
