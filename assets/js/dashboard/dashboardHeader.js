const profileBTN = document.querySelector('.profileBTN')
const dropdownProfile = document.querySelector('.dropdownProfile')

profileBTN.addEventListener("click",(e) => {
    dropdownProfile.classList.toggle('hidden')
})