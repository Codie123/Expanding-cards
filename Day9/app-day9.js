const sounds = ['birds', 'futuristic', 'sneezed', 'monster', 'sadness', 'window']



sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopSound()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})


function stopSound(){
    sounds.forEach(sound=>{
        let soundEffects = document.getElementById(sound)
        soundEffects.pause()
        soundEffects.currentTime = 0
    })
}
