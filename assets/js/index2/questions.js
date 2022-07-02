const questionBTNs = document.querySelectorAll('.questionBTN')
const questionItems = document.querySelectorAll('.questionItem')
for(let i = 0 ; i < questionBTNs.length;i++){
    questionBTNs[i].addEventListener('click' , (e) => {
        for(let l = 0 ; l < questionBTNs.length;l++){
            if(questionBTNs[l] != questionBTNs[i]){
                questionItems[l].classList.remove('active')
                questionBTNs[l].classList.remove('active')
            }
        }
        questionItems[i].classList.toggle('active')
        questionBTNs[i].classList.toggle('active')
    })
}