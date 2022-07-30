//Element selection
const container = document.querySelector('.container')
const left =  document.getElementById('left')
const right = document.getElementById('right')
const arrowDown = document.getElementById('arrowUp')
const arrowUp = document.getElementById('arrowDown')
//setting the total slides
const totalSlides = right.querySelectorAll('div').length
// index of the array of slides
let currentSlide = 0
//finding the screen current  height
const sliderHeight = container.clientHeight
//
left.style.top = `-${(totalSlides - 1) * 100}vh`

arrowUp.addEventListener('click',()=>{
    console.log('arrow up ')
    slideUp()
})

arrowDown.addEventListener('click',()=>{
    console.log('arrow down')
    sliderDown()
})


function slideUp(){
    console.log('slider Up function')
    currentSlide++
    console.log(currentSlide)
    if(currentSlide > totalSlides-1 ){
        currentSlide = 0
    }
    right.style.transform = `translateY(-${currentSlide * sliderHeight}px)`
    left.style.transform = `translateY(${currentSlide * sliderHeight}px)`
}
function sliderDown(){
    currentSlide--
    if(currentSlide< 0 ){
        currentSlide = totalSlides - 1
    }
    right.style.transform = `translateY(-${currentSlide * sliderHeight}px)`
    left.style.transform = `translateY(${currentSlide * sliderHeight}px)`
    
}
// function slider(direction){
//     console.log(`hello friend `)
//     if(direction === 'up'){
//         currentSlide++
//         if(currentSlide > totalSlides-1){
//             currentSlide = 0
//         }
//     }else if(direction === 'down'){
//         currentSlide--
//         if(currentSlide < 0 ){
//             currentSlide = totalSlides - 1
//         }
//     }
//     right.style.transform = `translateY(-${currentSlide * sliderHeight}px)`
//     left.style.transform = `translateY(${currentSlide * sliderHeight}px)`
// }








