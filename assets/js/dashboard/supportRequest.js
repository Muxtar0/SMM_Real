const supportTabContent = document.querySelector('.supportRequestContents .supportRequestTabContent .content')
const createSupportFirstBtn = document.querySelector('.createSupportFirstBtn')
const createSupportBtnSecond = document.querySelector('.createSupportBtnSecond')
const leftContentCol = document.querySelector('.supportRequestMainSection .leftContentCol')
const rightContentCol = document.querySelector('.supportRequestMainSection .rightContentCol')

createSupportFirstBtn.addEventListener('click' , (e) => {
    supportTabContent.classList.add('active')
})
createSupportBtnSecond.addEventListener('click' , (e) => {
    rightContentCol.classList.add('active')
    if(window.innerWidth > 992) {
        leftContentCol.classList.remove('col-lg-12')
        leftContentCol.classList.add('col-lg-8')
    }
})