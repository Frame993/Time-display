let hour = document.getElementById('hour');
let min = document.getElementById('min');
let second = document.getElementById('second');


setInterval(() => {
    const time = new Date();

    hour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();;
    min.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    second.innerHTML = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
}, 1000);