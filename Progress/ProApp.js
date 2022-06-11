const prev = document.getElementById('preview')
const next = document.getElementById('next')
const line = document.getElementById('line')
const circle = document.querySelectorAll('.circle')

let activeState = 1



next.addEventListener('click',()=>{
    activeState++
    if(activeState>circle.length){
        activeState = 4
    }    
    progresUpdater()
})

prev.addEventListener('click',()=>{
   activeState--
   if(activeState<1){
    activeState = 1
   }
   progresUpdater()
})

function progresUpdater(){

    circle.forEach((circle,index)=>{
        if(index<activeState){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')

    line.style.width= (actives.length-1)/(circle.length-1)*100+ '%'

    // btn disabled

    if(activeState===1){
        prev.disabled = true
    }else if(activeState === circle.length){
        next.disabled =true
    }else{
        prev.disabled = false
        next.disabled = false
    }

    // if(activeState === 1){
    //     prev.disabled = true
    // }else if(activeState === circle.length){
    //     next.disabled = true
    // }else{
    //     prev.disabled =false
    //     next.disabled = false
    // }
}