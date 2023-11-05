const setTime = ()  => {
    let now = new Date();
    document.querySelector('#current-hour').innerHTML = checkTime(now.getHours());
    document.querySelector('#current-min').innerHTML = checkTime(now.getMinutes());
    document.querySelector('#current-sec').innerHTML = checkTime(now.getSeconds());
    setTimeout(() => {
        setTime()
    }, 1000);
}
const checkTime = (i) => i < 10 ? '0' + i : i; 
