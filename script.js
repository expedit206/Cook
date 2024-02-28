const sections=document.querySelectorAll('section')
const header =document.querySelector('nav')
const bntBurger=document.querySelector('#burger-menu')
const nav=document.querySelector('.navigation')
const linkNav=document.querySelectorAll('.navigation a')

bntBurger.addEventListener('click', ()=>{
    nav.classList.toggle('active')
    bntBurger.classList.toggle('fa-window-close')
    if(window.scrollY==0){
        header.classList.toggle('active')
    }
})

linkNav.forEach(link =>{
    link.addEventListener('click',()=>{
        nav.classList.remove('active')
        bntBurger.classList.remove('fa-window-close')
    // link.classList.add('active')
    })

    
})
window.addEventListener('scroll',()=>{
    nav.classList.remove('active')
    bntBurger.classList.remove('fa-window-close')
})
window.addEventListener('scroll',(e)=>{
    header.classList.toggle('active',window.scrollY>0)
})

const scrollActive= ()=>{
    sections.forEach(section=>{
        let offsetTop=section.offsetTop-150
        let offsetheight=section.offsetHeight;
        // alert(height)
        let id=section.getAttribute('id')
        let a=document.querySelector(`.navigation a[href*="${id}"]`)
        // alert(id)
        if(scrollY>=offsetTop && scrollY<offsetTop+offsetheight){
            linkNav.forEach(links=>{
                 links.classList.remove('active')
                 a.classList.add('active')
            })
        }
    })
}
 window.addEventListener('scroll', scrollActive)