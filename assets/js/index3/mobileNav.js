const hamburgerMenuBtn = document.querySelector('.hamburgerMenuBtn')
const mobileOpenMenu = document.querySelector('.mobileOpenMenu')
const closeMobileNavBtn = document.querySelector('.closeMobileNavBtn')



hamburgerMenuBtn.addEventListener('click' , (e) => {
    mobileOpenMenu.classList.add('active')
}) 
closeMobileNavBtn.addEventListener('click' , (e) => {
    mobileOpenMenu.classList.remove('active')
}) 