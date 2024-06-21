import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

function updatetime () {
    const now = dayjs();
    const time = now.format('HH:mm:ss A')
    const date = now.format('dddd, MMMM DD YYYY')


    document.querySelector('.local-time').innerHTML = time;
    document.querySelector('.local-date').innerHTML = date;
};

updatetime();

setInterval( updatetime, 1000)