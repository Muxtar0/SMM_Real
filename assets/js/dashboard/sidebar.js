const dashboardContent = document.querySelector('.dashboardContent')
const showMoreBTN = document.querySelector('.showMoreBTN')
const showMoreContent = document.querySelector('.showMoreContent')
const sidebar = document.querySelector('.sidebar')
const closeOpenSidebarButton = document.querySelector('.closeOpenSidebarButton')
const bigLogo = document.querySelector('.bigLogo')
const smallLogo = document.querySelector('.smallLogo')
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
    closeOpenSidebarButton.classList.toggle('small')
    dashboardContent.classList.toggle('bigDashboard')
    sidebar.classList.toggle('smallSidebar')
    bigLogo.classList.toggle('notShowing')
    smallLogo.classList.toggle('notShowing')

  
})


window.addEventListener("resize" , (e) => {
      if(window.outerWidth <= 768){
    closeOpenSidebarButton.classList.add('small')

        dashboardContent.classList.toggle('bigDashboard')
        sidebar.classList.toggle('smallSidebar')
        bigLogo.classList.toggle('notShowing')
        smallLogo.classList.toggle('notShowing')

        
      }
})
window.addEventListener("DOMContentLoaded" , (e) => {
    if(localStorage.getItem('sidebar') == "smallSidebar"){
    closeOpenSidebarButton.classList.add('small')

        dashboardContent.classList.toggle('bigDashboard')
    sidebar.classList.toggle('smallSidebar')
    bigLogo.classList.toggle('notShowing')
    smallLogo.classList.toggle('notShowing')
    balanceMainDiv.classList.toggle('notShowing')
    for(let i= 0 ; i < sidebarListTexts.length;i++){
        sidebarListTexts[i].classList.toggle('notShowing')
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
      
      }
})