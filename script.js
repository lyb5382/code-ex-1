const header = document.querySelector('header')
const navBtn = document.querySelector('.nav-btn')
const scrollTop = document.querySelector('.scroll-top-btn')
const menuLinks = document.querySelectorAll('.menu-link')

menuLinks.forEach(link=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault()
        const targetId = link.getAttribute('href').substring(1)
        const targetEl = document.getElementById(targetId)
        if (targetEl) {
            window.scrollTo({
                top:targetEl.offsetTop, behavior: 'smooth'
            })
        }
    })
})

scrollTop.addEventListener('click', ()=>{
    window.scrollTo({
        top:0, behavior:'smooth'
    })
})

navBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log('click')
    header.classList.toggle('open')
})

window.addEventListener('scroll', ()=>{
    let i = window.scrollY
    if (i>100) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})