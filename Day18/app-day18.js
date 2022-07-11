const right = document.getElementById('right')
const left = document.getElementById('left')
const slides = document.querySelectorAll('.slides,s1')
const body = document.body

let activeCounter= 0

right.addEventListener('click',()=>{
    activeCounter++
    if(activeCounter>slides.length-1){
        activeCounter = 0
    }
    setSlideImg()
    bgsetImg()
})
left.addEventListener('click',()=>{
    activeCounter--
    if(activeCounter<0){
        activeCounter = slides.length-1
    }
    setSlideImg()
    bgsetImg()
})

bgsetImg()

function bgsetImg(){
    body.style.backgroundImage  = slides[activeCounter].style.backgroundImage
}
function setSlideImg(){
    
    slides.forEach(slide=>{
        slide.classList.remove('active')
    })
    slides[activeCounter].classList.add('active')
}

