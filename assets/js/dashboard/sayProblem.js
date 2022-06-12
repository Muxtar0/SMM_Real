const sayProblemBTNs = document.querySelectorAll('.sayProblem')
const sayProblemDivContent = document.querySelector('.sayProblemDivContent')


for(let i=0;i<sayProblemBTNs.length;i++){
    sayProblemBTNs[i].addEventListener('click' , (e) => {
        sayProblemDivContent.classList.remove('hidden')
    })
}