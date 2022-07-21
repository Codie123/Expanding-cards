const block=document.querySelectorAll('#block')
const mover=document.querySelector('.mover')
// const body =document.body
mover.addEventListener('dragstart',dragStrt)
mover.addEventListener('dragend',dragEnd)
// let style =  getComputedStyle(mover)
for(const box of block){
    box.addEventListener('dragover',dragOver)
    box.addEventListener('dragenter',dragEnter)
    box.addEventListener('dragleave',dragLeave)
    box.addEventListener('drop',dragDrop)
}
// body.addEventListener('dragenter',()=>{
//     body.style.background = "white"
// })
// body.addEventListener('drop',()=>{
//     body.style.background = "green"
//     body.style.backgroundImage = `url(${style.backgroundImage})`
// })
    // console.log(`url(${mover.style.backgroundImage})`)
function dragStrt(){

    this.classList.add("hold") 
    setTimeout(() => this.classList.add('invisible'), 0);
    
}

function dragEnd(){
    this.className = 'mover'
}

function dragOver(e){
    e.preventDefault()
}

function dragEnter(e){
    e.preventDefault()
    this.classList.add('hovered')
}

function dragLeave(){
    this.className = 'block'
}

function dragDrop(){
    this.className = 'block'
    this.append(mover)
}
