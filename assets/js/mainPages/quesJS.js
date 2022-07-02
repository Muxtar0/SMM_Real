const accordionHeader = document.querySelectorAll('.accordion-headerrightAcc') 
const accordionHeaderBtns = document.querySelectorAll('.accordion-headerrightAcc button') 
const accordionCollapses = document.querySelectorAll('.accordion-collapserightAcc') 

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