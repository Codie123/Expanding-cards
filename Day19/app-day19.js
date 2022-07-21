const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const time = document.getElementById('time')
const dateEl = document.getElementById('date')




function showtime(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let ampm = `AM`
    let days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    if(hours>12){
        hours -=12
        ampm = `PM`
    }
    if (hours == 0) {
        hours = 12;
        ampm = "AM";
    }
 
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
 
    let currentTime = hours + ":"
            + minutes + ":" + seconds + ampm;

    let currentDate = `${days[date.getDay()]},${months[date.getMonth()]} ${date.getDate()}`
    
    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 11, 0, 360)}deg)`
    minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    second.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

     time.innerHTML = currentTime
     dateEl.innerHTML = currentDate
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
showtime()
setInterval(showtime, 1000);
