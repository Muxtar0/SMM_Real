const profileBTN = document.querySelector('.profileBTN')
const barsBTN = document.querySelector('.barsBTN')
const notificationsBTN = document.querySelector('.notificationsBTN')
const dropdownProfile = document.querySelector('.dropdownProfile')
const dropdownBars = document.querySelector('.dropdownBars')
const dropdownNotifications = document.querySelector('.dropdownNotifications')

profileBTN.addEventListener("click",(e) => {
    dropdownProfile.classList.toggle('hidden')
})
barsBTN.addEventListener("click",(e) => {
    dropdownBars.classList.toggle('hidden')
})
notificationsBTN.addEventListener("click",(e) => {
    dropdownNotifications.classList.toggle('hidden')
})