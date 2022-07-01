const supportTabContent = document.querySelector('.supportRequestContents .supportRequestTabContent .content')
const supportTabContentMain = document.querySelector('.supportRequestContents')
const supportTabContentBgClose = document.querySelector('.supportRequestContents .bg-close')
const createSupportRequestContentLeft = document.querySelector('.supportRequestMainSection .leftContentCol .createSupportRequestContent')
const createSupportFirstBtn = document.querySelector('.createSupportFirstBtn')
const createSupportBtnSecond = document.querySelector('.createSupportBtnSecond')
const leftContentCol = document.querySelector('.supportRequestMainSection .leftContentCol')
const rightContentCol = document.querySelector('.supportRequestMainSection .rightContentCol')
const bgCloseRequest = document.querySelector('.supportRequestMainSection .rightContentCol .bg-close-request')
const closeSupportModalBTN = document.querySelector('.supportRequestMainSection .rightContentCol .closeSupportModalBTN')

createSupportFirstBtn.addEventListener('click' , (e) => {
    supportTabContentMain.classList.add('active')

})
supportTabContentBgClose.addEventListener('click' ,(e) => {
    supportTabContentMain.classList.remove('active')

})
createSupportBtnSecond.addEventListener('click' , (e) => {
    rightContentCol.classList.add('active')
    supportTabContentMain.classList.remove('active')
})
bgCloseRequest.addEventListener('click' , (e) => {
    rightContentCol.classList.remove('active')
})
closeSupportModalBTN.addEventListener('click' , (e) => {
    rightContentCol.classList.remove('active')
})