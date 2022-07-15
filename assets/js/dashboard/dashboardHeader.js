const profileBTN = document.querySelector('.profileBTN')
const barsBTN = document.querySelector('.barsBTN')
const notificationsBTN = document.querySelector('.notificationsBTN')
const dropdownProfile = document.querySelector('.dropdownProfile')
const dropdownBars = document.querySelector('.dropdownBars')
const dropdownNotifications = document.querySelector('.dropdownNotifications')
const dashboardHeaderMain = document.querySelector('.dashboardHeader');
const main = document.querySelector('main');



const themeChangeBtn = document.querySelector('.themeChangeBtn')
const body = document.querySelector('body')
const html = document.querySelector('html')
let theme = "light";



window.addEventListener("load" , (e) => {
    if(window.outerWidth <= 992){

        dashboardHeaderMain.classList.add('small')
        main.classList.add('small')
      
    }
    else{
        dashboardHeaderMain.classList.remove('small')
        main.classList.remove('small')

    }
})
window.addEventListener("resize" , (e) => {
    if(window.outerWidth <= 992){

        dashboardHeaderMain.classList.add('small')
        main.classList.add('small')
      
    }
    else{
        dashboardHeaderMain.classList.remove('small')
        main.classList.remove('small')

    }
})





dropdownBars.addEventListener('click',function(event){
    event.stopPropagation();
});
dropdownProfile.addEventListener('click',function(event){
    event.stopPropagation();
});
dropdownNotifications.addEventListener('click',function(event){
    event.stopPropagation();
});

const controlTheme = () => {
    if(localStorage.getItem('theme') == null){
        // Do nothing
    }
    else if(localStorage.getItem('theme') == "dark"){
        body.classList.add('dark')
        html.classList.add('dark')
        themeChangeBtn.innerHTML='<i class="fa-solid fa-sun"></i>'
        theme = "dark";
        
    }
    else if(localStorage.getItem('theme') == "light"){
        body.classList.remove('dark')
        html.classList.remove('dark')
        themeChangeBtn.innerHTML='<i class="fa-solid fa-moon"></i>'
        theme = "light"
    }
}
controlTheme();

themeChangeBtn.addEventListener('click' , (e) => {
    if(theme == "light"){
        body.classList.add('dark')
        html.classList.add('dark')
        themeChangeBtn.innerHTML='<i class="fa-solid fa-sun"></i>'
        theme = "dark";
        localStorage.setItem('theme','dark')
    }
    else if (theme == "dark"){
        body.classList.remove('dark')
        html.classList.add('dark')
        themeChangeBtn.innerHTML='<i class="fa-solid fa-moon"></i>'
        theme = "light"
        localStorage.setItem('theme','light')
    }
}) 

const dashboardHeader = document.querySelector('.dashboardHeader')

profileBTN.addEventListener("click",(e) => {
    e.stopPropagation();

    dropdownProfile.classList.toggle('hidden')
    dropdownBars.classList.add('hidden')
    dropdownNotifications.classList.add('hidden')
})
barsBTN.addEventListener("click",(e) => {
    e.stopPropagation();

    dropdownBars.classList.toggle('hidden')
    dropdownNotifications.classList.add('hidden')
    dropdownProfile.classList.add('hidden')


})
notificationsBTN.addEventListener("click",(e) => {
    e.stopPropagation();
    dropdownProfile.classList.add('hidden')
    dropdownBars.classList.add('hidden')
    dropdownNotifications.classList.toggle('hidden')
})


// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click' , (event) => {
    if (!event.target.matches('.dropdownProfile') && !event.target.matches('.profileBTN') && !event.target.matches('.dropdownBars') && !event.target.matches('.barsBTN') && !event.target.matches('.dropdownNotifications') && !event.target.matches('.notificationsBTN')) {
        dropdownProfile.classList.add('hidden')
        dropdownBars.classList.add('hidden')
        dropdownNotifications.classList.add('hidden')

    }
})
