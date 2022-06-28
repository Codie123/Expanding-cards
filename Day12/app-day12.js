const buttons = document.querySelectorAll('.faq-btns')
const faqs = document.querySelectorAll('.faq')


buttons.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        faqs[idx].classList.toggle('active')
    })
})
