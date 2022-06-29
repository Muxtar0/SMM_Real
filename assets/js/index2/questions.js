const questionBTNs = document.querySelectorAll('.questionBTN')
const questionItems = document.querySelectorAll('.questionItem')

for(let i = 0 ; i , questionBTNs.length;i++){
    questionBTNs[i].addEventListener('click' , (e) => {
        questionItems[i].classList.toggle('active')
        setTimeout(() => {
        questionItems[i].classList.toggle('active2')
            
        }, 100);
    })
}