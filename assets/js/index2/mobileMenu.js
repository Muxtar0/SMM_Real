const mobileNavBtn = document.querySelector('.mobileMenuBtn')
const closeNavBTN = document.querySelector('.closeNavBTN')
const mobileOpenMenu = document.querySelector('.mobileOpenMenu')

mobileNavBtn.addEventListener('click' , (e) => {
    mobileOpenMenu.classList.add('active')
   
})
closeNavBTN.addEventListener('click' , (e) => {
    mobileOpenMenu.classList.remove('active')
   
})