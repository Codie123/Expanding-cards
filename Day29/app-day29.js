const container =  document.querySelector('.container')
const click  = document.getElementById('likes')

let a = 0
let clicked = 0
container.addEventListener('click',(e)=>{   

    if(a === 0){
        a = new Date().getTime()
    }else{
        if((new Date().getTime() - a) < 800){
            beat(e)
            a = 0
        }else{
            a = new Date().getTime()
        }
    }
   
})

function beat(value){
    let heart = document.createElement('i')
    
    heart.classList.add('fa-solid')
    heart.classList.add('fa-heart')

    let x = value.clientX
    let y = value.clientY

    let left = value.target.offsetLeft
    let top  = value.target.offsetTop

    let xinside = x - left
    let yinside = y - top 

    heart.style.top = `${yinside}px`
    heart.style.left = `${xinside}px`

    container.appendChild(heart)
    click.innerHTML = `You liked it ${++clicked}`

    setTimeout(()=>{heart.remove()},1000)
    
}