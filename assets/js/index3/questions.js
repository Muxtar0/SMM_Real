const questionBTNs = document.querySelectorAll('.questionBTN')
const questionInfos = document.querySelectorAll('.questionContent .item')


for(let i = 0 ; i < questionBTNs.length; i++){
    questionBTNs[i].addEventListener('click' , (e) => {
        
        questionInfos[i].classList.toggle('active')
        setTimeout(() => {
        questionInfos[i].classList.toggle('active2')
            
        }, 300);
    }) 
}