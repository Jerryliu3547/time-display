import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

let military_mode = false;

function updatetime () {
    const now = dayjs();
    const time = now.format('h:mm:ss A');
    const militaryTime  = now.format('HH:mm:ss')
    const date = now.format('dddd, MMMM DD YYYY');

    if (!military_mode) {
        document.querySelector('.js-local-time').innerHTML = time;
        document.querySelector('.js-local-date').innerHTML = date;
    } else {
        document.querySelector('.js-local-time').innerHTML = militaryTime;
        document.querySelector('.js-local-date').innerHTML = date;
    }
};

function switchButton () {
    document.querySelector('.js-switch-button').innerHTML = 
    '<button> switch to military mode </button>'
    addEventListener('click', ()=>{
        military_mode = !military_mode
    })
}

switchButton();

updatetime();

setInterval(updatetime, 1000)