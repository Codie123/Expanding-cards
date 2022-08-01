const header = document.querySelector('.nav')
const menu = document.querySelector('.menu')

menu.addEventListener('click',()=>{
    if(header.classList.contains('active')){
        header.classList.remove('active')
    }else{
        header.classList.add('active')
    }
})

