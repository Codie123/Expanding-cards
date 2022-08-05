const container =  document.querySelector('.container')
const image = document.querySelector('img')

container.addEventListener('click',(e)=>{
    console.log(e)
    beat(e)
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

    setTimeout(()=>{heart.remove()},1000)
    
}