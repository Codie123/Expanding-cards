const box = document.querySelectorAll('.box')

window.addEventListener('scroll',scrollUp)

scrollUp()
function scrollUp(){
    
    const windowHeight = window.innerHeight/5*4

 
    box.forEach(x=>{
        let boxTopHeight = x.getBoundingClientRect().top
        if(boxTopHeight<windowHeight){
            x.classList.add('active')
        }else{
            x.classList.remove('active')
        }
    })
}