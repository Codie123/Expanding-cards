let card = document.querySelectorAll('.card')

card.forEach(x=>{
    x.addEventListener('click',()=>{
        removeActive();
        x.classList.add('active') 
    })
})

function removeActive(){
    card.forEach(x=> x.classList.remove('active'))
}