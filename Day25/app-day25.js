const header = document.querySelector('.header')

window.addEventListener('scroll',update)

function update(){
    if(window.scrollY > header.offsetHeight + 150){
        console.log('scroll active')
        header.classList.add('active')
    }else{
        header.classList.remove('active')
}
}