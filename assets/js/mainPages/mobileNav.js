const mobileNavBtn = document.querySelector('.mobileNavBtn')
const mobileOpenMenu = document.querySelector('.mobileOpenMenu')
const closeNavBarbtn = document.querySelector('.closeNavBarbtn')
const bgClose = document.querySelector('.bg-close')

mobileNavBtn.addEventListener('click' , (e) => {
    mobileOpenMenu.classList.add('active')
})
closeNavBarbtn.addEventListener('click' , (e) => {
    mobileOpenMenu.classList.remove('active')
})
bgClose.addEventListener('click' , (e) => {
    mobileOpenMenu.classList.remove('active')
})