const loadtext = document.getElementById('load')
const background = document.getElementById('image')
let load = 0

let interval = setInterval(updater,30)

function updater(){
    load++
    if(load === 100){
        clearInterval(interval)
    }

    loadtext.innerText = `${load}%`
    loadtext.style.opacity= scale(load, 0, 100, 1, 0)
    background.style.filter=`blur(${scale(load, 0, 100, 30, 0)}px)`

}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}