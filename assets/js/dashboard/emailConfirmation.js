const changeAdress = document.querySelector('.changeAdress')
const modalEmail = document.querySelector('.modalEmail')
const closeChangeAdressBtn = document.querySelector('.closeChangeAdressBtn')
const bgClose = document.querySelector('.bg-close')

changeAdress.addEventListener('click' , (e) => {
    modalEmail.classList.add('show')
})
closeChangeAdressBtn.addEventListener('click' , (e) => {
    modalEmail.classList.remove('show')
})
bgClose.addEventListener('click' , (e) => {
    modalEmail.classList.remove('show')
})