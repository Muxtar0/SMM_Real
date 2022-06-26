const supportTabContent = document.querySelector('.supportRequestContents .supportRequestTabContent .content')
const supportTabContentMain = document.querySelector('.supportRequestContents .supportRequestTabContent')
const createSupportRequestContentLeft = document.querySelector('.supportRequestMainSection .leftContentCol .createSupportRequestContent')
const createSupportFirstBtn = document.querySelector('.createSupportFirstBtn')
const createSupportBtnSecond = document.querySelector('.createSupportBtnSecond')
const leftContentCol = document.querySelector('.supportRequestMainSection .leftContentCol')
const rightContentCol = document.querySelector('.supportRequestMainSection .rightContentCol')
const bgCloseRequest = document.querySelector('.supportRequestMainSection .rightContentCol .bg-close-request')
const closeSupportModalBTN = document.querySelector('.supportRequestMainSection .rightContentCol .closeSupportModalBTN')

createSupportFirstBtn.addEventListener('click' , (e) => {
    supportTabContentMain.classList.add('active')
    setInterval(() => {
    supportTabContent.classList.add('active')
        
    }, 200);
    createSupportRequestContentLeft.classList.add('hidden')
})
createSupportBtnSecond.addEventListener('click' , (e) => {
    rightContentCol.classList.add('active')
})
bgCloseRequest.addEventListener('click' , (e) => {
    rightContentCol.classList.remove('active')
})
closeSupportModalBTN.addEventListener('click' , (e) => {
    rightContentCol.classList.remove('active')
})