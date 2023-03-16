function showTime(){

    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let meridiem = 'AM';

    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12
        meridiem = 'PM';
    }

    hour = (hour < 10) ? '0' + hour : hour;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    let time = hour + ':' + minutes + ':' + seconds + ' ' + meridiem;

    document.getElementById('timeDisplay').innerHTML = time;
    // document.getElementById(timeDisplay).textContent = time;

    setInterval(showTime, 1000);

}

showTime();