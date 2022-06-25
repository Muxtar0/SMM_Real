const mobileNavBtn = document.querySelector('.mobileMenuBtn')
const closeNavBTN = document.querySelector('.closeNavBTN')
const mobileOpenMenu = document.querySelector('.mobileOpenMenu')
const closeMobileNavDiv = document.querySelector('.bg-close')

mobileNavBtn.addEventListener('click' , (e) => {
    mobileOpenMenu.classList.add('active')
   
})
closeNavBTN.addEventListener('click' , (e) => {
    mobileOpenMenu.classList.remove('active')
   
})
closeMobileNavDiv.addEventListener('click' , (e) => {
    mobileOpenMenu.classList.remove('active')
}) 