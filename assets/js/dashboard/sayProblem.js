const sayProblemBTNs = document.querySelectorAll('.sayProblem')
const sayProblemDivContent = document.querySelector('.sayProblemDivContent')
const modalBgButton = document.querySelector('.modalBgButton')
const closeSayProblemModalBtn = document.querySelector('.closeSayProblemModalBtn')
const problemDropDowns = document.querySelectorAll('.problemDropDown');
const editBtns = document.querySelectorAll('.editBtn');

let btnLatest;

for(let i=0;i<sayProblemBTNs.length;i++){
    sayProblemBTNs[i].addEventListener('click' , (e) => {
        e.stopPropagation();

        
        if(e.target == btnLatest){
            problemDropDowns[i].classList.toggle('active')

        }
        else{
            for(let i=0;i<problemDropDowns.length;i++){
                problemDropDowns[i].classList.remove('active')
            }
            problemDropDowns[i].classList.add('active')

        }
        btnLatest = e.target;

    })
}
for(let i=0;i<problemDropDowns.length;i++){
    problemDropDowns[i].addEventListener('click' , (e) => {
        e.stopPropagation();
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


window.addEventListener('click' , (event) => {
    if (!event.target.matches('.problemDropDown') && !event.target.matches('.sayProblem')) {
        for(let i=0;i<problemDropDowns.length;i++){
            problemDropDowns[i].classList.remove('active')
        }

    }
})