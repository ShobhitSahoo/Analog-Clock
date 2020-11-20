setInterval(setClock, 1000);

const hourHand = document.querySelector('.hourHand');
const minHand = document.querySelector('.minHand');
const secHand = document.querySelector('.secHand');

function setClock() {
    const CurDate = new Date();
    const secRatio = CurDate.getSeconds() / 60;
    const minRatio = (secRatio + CurDate.getMinutes()) / 60;
    const hourRatio = (minRatio + CurDate.getHours()) / 12;

    setRotation(secHand, secRatio);
    setRotation(minHand, minRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, ratio) {
    element.style.setProperty('--rotation', ratio * 360);
}

setClock();