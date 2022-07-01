const sayProblemBTNs = document.querySelectorAll('.sayProblem')
const sayProblemDivContent = document.querySelector('.sayProblemDivContent')
const modalBgButton = document.querySelector('.modalBgButton')
const closeSayProblemModalBtn = document.querySelector('.closeSayProblemModalBtn')
const problemDropDowns = document.querySelectorAll('.problemDropDown');
const editBtns = document.querySelectorAll('.editBtn');

for(let i=0;i<sayProblemBTNs.length;i++){
    sayProblemBTNs[i].addEventListener('click' , (e) => {
        problemDropDowns[i].classList.toggle('active')
    })
}
for(let i=0;i<editBtns.length;i++){
    editBtns[i].addEventListener('click' , (e) => {
        sayProblemDivContent.classList.remove('hidden')
        for(let i=0;i<problemDropDowns.length;i++){
            problemDropDowns[i].classList.remove('active')
        }
    })
}
modalBgButton.addEventListener('click' , (e) => {
    sayProblemDivContent.classList.add('hidden')
})
closeSayProblemModalBtn.addEventListener('click' , (e) => {
    sayProblemDivContent.classList.add('hidden')
})