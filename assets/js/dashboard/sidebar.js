const dashboardContent = document.querySelector('.dashboardContent')
const showMoreBTN = document.querySelector('.showMoreBTN')
const showMoreContent = document.querySelector('.showMoreContent')
const sidebar = document.querySelector('.sidebar')
const closeOpenSidebarButton = document.querySelector('.closeOpenSidebarButton')
const bigLogo = document.querySelector('.bigLogo')
const smallLogo = document.querySelector('.smallLogo')
const balanceMainDiv = document.querySelector('.balanceMainDiv')
const sidebarListTexts = document.querySelectorAll('.sidebarList ul li a .text')
const showMoreContentTexts = document.querySelectorAll('.showMoreContent ul li a .text')
showMoreBTN.addEventListener('click' , (e) => {
    showMoreBTN.classList.toggle('active')
    showMoreContent.classList.toggle('hidden')
})
closeOpenSidebarButton.addEventListener('click' , (e) => {
    if(localStorage.getItem('sidebar') == "smallSidebar"){
        localStorage.setItem('sidebar',"bigSidebar")

    }
    else if(localStorage.getItem('sidebar') == "bigSidebar"){
        localStorage.setItem('sidebar',"smallSidebar")


    }

    dashboardContent.classList.toggle('bigDashboard')
    sidebar.classList.toggle('smallSidebar')
    bigLogo.classList.toggle('notShowing')
    smallLogo.classList.toggle('notShowing')
    balanceMainDiv.classList.toggle('notShowing')
    for(let i= 0 ; i < sidebarListTexts.length;i++){
        sidebarListTexts[i].classList.toggle('notShowing')
    }
    showMoreBTN.querySelector("span").classList.toggle('notShowing')
    for(let i= 0 ; i < showMoreContentTexts.length;i++){
        showMoreContentTexts[i].classList.toggle('notShowing')
    }
})


window.addEventListener("resize" , (e) => {
      if(window.outerWidth <= 768){
        dashboardContent.classList.toggle('bigDashboard')
        sidebar.classList.toggle('smallSidebar')
        bigLogo.classList.toggle('notShowing')
        smallLogo.classList.toggle('notShowing')
        balanceMainDiv.classList.toggle('notShowing')
        for(let i= 0 ; i < sidebarListTexts.length;i++){
            sidebarListTexts[i].classList.toggle('notShowing')
        }
        showMoreBTN.querySelector("span").classList.toggle('notShowing')
        for(let i= 0 ; i < showMoreContentTexts.length;i++){
            showMoreContentTexts[i].classList.toggle('notShowing')
        }
      }
})
window.addEventListener("DOMContentLoaded" , (e) => {
    if(localStorage.getItem('sidebar') == "smallSidebar"){
        dashboardContent.classList.toggle('bigDashboard')
    sidebar.classList.toggle('smallSidebar')
    bigLogo.classList.toggle('notShowing')
    smallLogo.classList.toggle('notShowing')
    balanceMainDiv.classList.toggle('notShowing')
    for(let i= 0 ; i < sidebarListTexts.length;i++){
        sidebarListTexts[i].classList.toggle('notShowing')
    }
    showMoreBTN.querySelector("span").classList.toggle('notShowing')

    for(let i= 0 ; i < showMoreContentTexts.length;i++){
        showMoreContentTexts[i].classList.toggle('notShowing')
    }
    }
    if(window.outerWidth <= 768){
        dashboardContent.classList.toggle('bigDashboard')
        sidebar.classList.toggle('smallSidebar')
        bigLogo.classList.toggle('notShowing')
        smallLogo.classList.toggle('notShowing')
        balanceMainDiv.classList.toggle('notShowing')
        for(let i= 0 ; i < sidebarListTexts.length;i++){
            sidebarListTexts[i].classList.toggle('notShowing')
        }
        showMoreBTN.querySelector("span").classList.toggle('notShowing')
        for(let i= 0 ; i < showMoreContentTexts.length;i++){
            showMoreContentTexts[i].classList.toggle('notShowing')
        }
      }
})