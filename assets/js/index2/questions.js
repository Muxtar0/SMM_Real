const questionBTNs = document.querySelectorAll('.questionBTN')
const questionItems = document.querySelectorAll('.questionItem')
for(let i = 0 ; i < questionBTNs.length;i++){
    questionBTNs[i].addEventListener('click' , (e) => {
        for(let i = 0 ; i < questionBTNs.length;i++){
            if(questionBTNs[i].classList.contains('active')){
                questionItems[i].classList.remove('active')
            questionBTNs[i].classList.remove('active')
            }
        }
        questionItems[i].classList.toggle('active')
        questionBTNs[i].classList.toggle('active')
    })
}