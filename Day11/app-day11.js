const contentEl = document.getElementById('content')
window.addEventListener('keydown',(e)=>{
    contentEl.innerHTML = `<div class="key">Key= ${e.key}</div> <div class="key">KeyCode= ${e.keyCode}</div><div class="key">Code= ${e.code}</div>`
})