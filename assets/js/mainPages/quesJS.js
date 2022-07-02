const accordionHeader = document.querySelectorAll('.accordion-headerrightAcc') 
const accordionHeaderBtns = document.querySelectorAll('.accordion-headerrightAcc button') 
const accordionCollapses = document.querySelectorAll('.accordion-collapserightAcc') 

for(let i =0;i<accordionHeader.length;i++){
    accordionHeader[i].addEventListener('click',(e) =>  {
        for(let i =0;i<accordionHeaderBtns.length;i++){
            accordionHeaderBtns[i].classList.add('collapsed')
            accordionHeaderBtns[i].classList.remove('active')
            accordionHeaderBtns[i].setAttribute('aria-expanded',false);

        }
        accordionHeader[i].querySelector('button').classList.add('active')
        for(let i =0;i<accordionCollapses.length;i++){
            accordionCollapses[i].classList.remove('show')
        }
    })

}




const accordionHeaderLeft = document.querySelectorAll('.accordion-headerleftAcc') 
const accordionHeaderBtnsLeft = document.querySelectorAll('.accordion-headerleftAcc button') 
const accordionCollapsesLeft = document.querySelectorAll('.accordion-collapseleftAcc') 
for(let i =0;i<accordionHeaderLeft.length;i++){
    accordionHeaderLeft[i].addEventListener('click',(e) =>  {
        for(let i =0;i<accordionHeaderBtnsLeft.length;i++){
            accordionHeaderBtnsLeft[i].classList.add('collapsed')
            accordionHeaderBtnsLeft[i].classList.remove('active')

            accordionHeaderBtnsLeft[i].setAttribute('aria-expanded',false);
        }
        accordionHeaderLeft[i].querySelector('button').classList.add('active')

        for(let i =0;i<accordionCollapsesLeft.length;i++){
            accordionCollapsesLeft[i].classList.remove('show')
        }
    })

}