var digitalClock = true;
const setTime = () => {
    let now = new Date();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    if (document.querySelector('#clocktype').checked) {
        document.querySelector('.digital-clock').classList.add('hide');
        document.querySelector('.analog-clock').classList.remove('hide');
        let hourrotation = ((hours % 12) * 360) / 12;
        let minrotation = (min * 360)/ 60;
        let secrotation = (sec * 360)/ 60;
        document.querySelector('#current-hour-analog').style.transform = `translateX(-50%) rotate(${hourrotation}deg)`;
        document.querySelector('#current-min-analog').style.transform = `translateX(-50%) rotate(${minrotation}deg)`;
        document.querySelector('#current-sec-analog').style.transform = `translateX(-50%) rotate(${secrotation}deg)`;
    }

    else {
        let format24 = document.querySelector('#clockformat').checked
        document.querySelector('.analog-clock').classList.add('hide');
        document.querySelector('.digital-clock').classList.remove('hide');
        let digitalclock = `<span id="current-hour">${checkTime(format24 ? hours % 12 : hours)}</span>:<span id="current-min">${checkTime(min)}</span>${document.querySelector('#secondsHandSwitch').checked ? ":<span id='current-sec'></span>" : ''} ${format24 ? `<span class="time-container">${hours > 12 ? "PM" : "AM"}</span>` : ''}`;
        document.querySelector('#current-time').innerHTML = digitalclock; 
    }


    setTimeout(() => {
        setTime()
    }, 1000);

}
const checkTime = (i) => i < 10 ? '0' + i : i; 
