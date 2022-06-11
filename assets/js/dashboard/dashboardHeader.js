const profileBTN = document.querySelector('.profileBTN')
const barsBTN = document.querySelector('.barsBTN')
const notificationsBTN = document.querySelector('.notificationsBTN')
const dropdownProfile = document.querySelector('.dropdownProfile')
const dropdownBars = document.querySelector('.dropdownBars')
const dropdownNotifications = document.querySelector('.dropdownNotifications')


const dashboardHeader = document.querySelector('.dashboardHeader')

profileBTN.addEventListener("click",(e) => {
    dropdownProfile.classList.toggle('hidden')
    dropdownBars.classList.add('hidden')
    dropdownNotifications.classList.add('hidden')
})
barsBTN.addEventListener("click",(e) => {
    dropdownBars.classList.toggle('hidden')
    dropdownNotifications.classList.add('hidden')
    dropdownProfile.classList.add('hidden')


})
notificationsBTN.addEventListener("click",(e) => {
    dropdownProfile.classList.add('hidden')
    dropdownBars.classList.add('hidden')
    dropdownNotifications.classList.toggle('hidden')
})