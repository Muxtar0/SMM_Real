const mobileNavBtn = document.querySelector('.mobileNavBtn')
const mobileOpenMenu = document.querySelector('.mobileOpenMenu')
let isOpen = false

mobileNavBtn.addEventListener('click' , (e) => {
    isOpen = !isOpen
    if(isOpen == false){
        mobileNavBtn.innerHTML='<i class="fa-solid fa-bars"></i>'
    }
    else{
        mobileNavBtn.innerHTML = '<i class="fa-solid fa-x"></i>'
    }
    mobileOpenMenu.classList.toggle('active')
})