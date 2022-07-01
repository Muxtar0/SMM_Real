const dashboardContent = document.querySelector('.dashboardContent')
const showMoreBTN = document.querySelector('.showMoreBTN')
const showMoreContent = document.querySelector('.showMoreContent')
const sidebar = document.querySelector('.sidebar')
const closeOpenSidebarButton = document.querySelector('.closeOpenSidebarButton')
const bigLogo = document.querySelector('.bigLogo')
const smallLogo = document.querySelector('.smallLogo')
const showMoreContentTexts = document.querySelectorAll('.showMoreContent ul li a .text')

window.addEventListener("DOMContentLoaded" , (e) => {
    
    if(window.outerWidth <= 1030){
        dashboardContent.classList.toggle('bigDashboard')
        sidebar.classList.toggle('smallSidebar')
        bigLogo.classList.toggle('notShowing')
        smallLogo.classList.toggle('notShowing')

      
      }
})

window.addEventListener('DOMContentLoaded' , (e) => {
    if(window.innerWidth > 1030){
        if(localStorage.getItem('sidebar') == null){
            localStorage.setItem('sidebar',"bigSidebar")
        }
    }
    else{
        if(localStorage.getItem('sidebar') == null){
            localStorage.setItem('sidebar',"smallSidebar")
        }
    }
})



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
      if(window.outerWidth <= 1030){
        closeOpenSidebarButton.classList.add('small')
        dashboardContent.classList.toggle('bigDashboard')
        sidebar.classList.toggle('smallSidebar')
        bigLogo.classList.toggle('notShowing')
        smallLogo.classList.toggle('notShowing')

        
      }
})
