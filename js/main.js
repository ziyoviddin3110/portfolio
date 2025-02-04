
const navlincs = document.querySelectorAll('header nav a')
const logolink = document.querySelector('.logo')
const sections  = document.querySelectorAll('section')
const menuIcons = document.querySelector('#menu-iconc')
const navBar = document.querySelector('header nav')

menuIcons.addEventListener('click', ()=>{
    
    menuIcons.classList.toggle('bx-x')

    navBar.classList.toggle('active')
})

const activdPagr = ()=>{
const barsbox = document.querySelector('.bars-box')
    
navlincs.forEach(link =>{
    link.classList.remove('active')
})
    barsbox.classList.remove('active')
    setTimeout(() => {
    barsbox.classList.add('active')
        
    }, 1100);
    sections.forEach(section =>{
        section.classList.remove('active')
    })
    menuIcons.classList.remove('bx-x')

    navBar.classList.remove('active')
}


navlincs.forEach((link, ind )=>{
    link.addEventListener('click', ()=>{
        if(!link.classList.contains('active')){
            activdPagr()
            link.classList.add('active')
            setTimeout(() => {
                sections[ind].classList.add('active')
            }, 1100);
        }
    })
})

logolink.addEventListener('click',()=>{
    
    if(!navlincs[0].classList.contains('active')){
        activdPagr()
        navlincs[0].classList.add('active')

        setTimeout(() => {
            sections[0].classList.add('active')
        }, 1000);

    }
})





const resumeBtns = document.querySelectorAll('.resume-btn')

resumeBtns.forEach((btn, idx)=>{
    btn.addEventListener("click", ()=>{
        const resumeDetails = document.querySelectorAll(".resume-detali")
        resumeBtns.forEach(btn =>{
            btn.classList.remove("active");
        });
        btn.classList.add("active")
        resumeDetails.forEach(detali =>{
            detali.classList.remove("active");
        });
        resumeDetails[idx].classList.add("active")
    })
});



const arrowRigth =document.querySelector(".portfolio-box .navidation .arrow-regth")
const arrowLeft =document.querySelector(".portfolio-box .navidation .arrow-ligth")
let index =0 ;
  

const activeportfolio =()=>{
    const imgslide =document.querySelector(".portfolio-carause .img-slide")
    const portfoliadertali =document.querySelectorAll(".portfolio-detail")
    imgslide.style.transform =`translateX(calc(${index* -100}% - ${index*2}rem))`
    portfoliadertali.forEach(detail =>{
        detail.classList.remove('active')
    })
    portfoliadertali[index].classList.add('active')
}

arrowRigth.addEventListener("click",()=>{
    if(index < 3){
        index++
        arrowLeft.classList.remove("disabled")

    }else{
        index=4;
        arrowRigth.classList.add("disabled")
    }
    activeportfolio()
})

arrowLeft.addEventListener("click",()=>{
    if(index > 1){
        index--
        arrowRigth.classList.remove("disabled")

    }else{
        index=0;
        arrowLeft.classList.add("disabled")

    }
    activeportfolio()
})