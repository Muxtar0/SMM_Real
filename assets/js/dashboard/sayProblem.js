const sayProblemBTNs = document.querySelectorAll('.sayProblem')
const sayProblemDivContent = document.querySelector('.sayProblemDivContent')
const modalBgButton = document.querySelector('.modalBgButton')
const closeSayProblemModalBtn = document.querySelector('.closeSayProblemModalBtn')


for(let i=0;i<sayProblemBTNs.length;i++){
    sayProblemBTNs[i].addEventListener('click' , (e) => {
        sayProblemDivContent.classList.remove('hidden')
    })
}
modalBgButton.addEventListener('click' , (e) => {
    sayProblemDivContent.classList.add('hidden')
})
closeSayProblemModalBtn.addEventListener('click' , (e) => {
    sayProblemDivContent.classList.add('hidden')
})