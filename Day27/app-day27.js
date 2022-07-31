
const contain = document.getElementById('ctn')
const display = document.getElementById('notify')

let types = ['insta','snap','youtube']
let messages = ['Hello','friend','welcome']
generate()
 
const button = document.querySelector('.noti')
button.addEventListener('click',()=>{
    generateNotification()

})
function generate(){
    let button = document.createElement('button')
    button.classList.add('noti')
    button.innerHTML = "show notification"
    contain.appendChild(button)
}




function generateNotification(){
    let notification = document.createElement('button')
    notification.classList.add('btn')
    notification.classList.add(randomType())
    notification.innerText = randomText()
    display.appendChild(notification)
    setTimeout(() => {
        remove()
    }, 5000);
}

function remove(){
    let element = document.querySelector('.btn')
    element.remove()
}



function randomType(){
    return types[Math.floor(Math.random() * types.length)]
}
function randomText(){
    return messages[Math.floor(Math.random() * messages.length )]
}