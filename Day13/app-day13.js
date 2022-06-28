const textArea = document.getElementById('textarea')
const textTag = document.getElementById('tags')

textarea.focus()

textArea.addEventListener('keyup',(e)=>{
    createTag(e.target.value)

    if(e.key === "Enter"){
        setTimeout(() => {
            e.target.value = ''
        }, 10);
        random()
    }
})
function createTag(input){

    let text = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())


    textTag.innerHTML = ''
    
    text.forEach(x => {

        const textGe = document.createElement('span')
        textTag.appendChild(textGe)  
        textGe.classList.add('tag')
        textGe.innerText = x      
        
    });
}

function random(){
   
    let times=  30
   const interval = setInterval(() => {
        const randTag = picker()
            randTag.classList.add('high')
        setTimeout(() => {
            randTag.classList.remove('high')
        }, 100);
   }, 100);

   setTimeout(()=>{
    clearInterval(interval)
    setTimeout(() => {
            const randTag = picker()
            randTag.classList.add('high')
    }, 100);
   },times * 100)
    
}
function picker(){
    const ell = document.querySelectorAll('.tag')
    return ell[Math.floor(Math.random()*ell.length)]
}
// function highlight(rand){
//     rand.classList.add('high')
// }
// function unhighlight(rand){
//     rand.classList.remove('high')
// }