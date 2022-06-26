const bottomAccordions = document.querySelectorAll('.bottomAccordion')
const bottomAccordionsButtons = document.querySelectorAll('.bottomAccordion button')


for(let i = 0 ; i < bottomAccordionsButtons.length;i++){
    bottomAccordionsButtons[i].addEventListener('click' , (e) => {
        bottomAccordions[i].classList.toggle('active')
        setTimeout(() => {
        bottomAccordions[i].classList.toggle('active2')
            
        }, 50);
    })
}