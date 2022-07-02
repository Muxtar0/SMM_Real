const accordionHeader = document.querySelectorAll('.accordion-header') 
const accordionHeaderBtns = document.querySelectorAll('.accordion-header button') 
const accordionCollapses = document.querySelectorAll('.accordion-collapse') 

const leftAcc = document.querySelector('.leftAcc')


leftAcc.addEventListener('click' ,(e) => {
    e.stopPropagation();
})

window.addEventListener('click' , (e) => {
    if(!e.target.matches(".leftAcc")){

        for(let i =0;i<accordionHeader.length;i++){
            accordionHeader[i].addEventListener('click',(e) =>  {
                for(let i =0;i<accordionHeaderBtns.length;i++){
                    accordionHeaderBtns[i].classList.add('collapsed')
                    accordionHeaderBtns[i].setAttribute('aria-expanded',false);
        
                }
                for(let i =0;i<accordionCollapses.length;i++){
                    accordionCollapses[i].classList.remove('show')
                }
            })
        
        }
    }
})