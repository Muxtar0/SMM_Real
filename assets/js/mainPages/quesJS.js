const accordionHeader = document.querySelectorAll('.accordion-headerrightAcc') 
const accordionHeaderBtns = document.querySelectorAll('.accordion-headerrightAcc button') 
const accordionCollapses = document.querySelectorAll('.accordion-collapserightAcc') 
let activeBtn;
for(let i =0;i<accordionHeader.length;i++){
    accordionHeader[i].addEventListener('click',(e) =>  {
        
        for(let l =0;l<accordionHeaderBtns.length;l++){
            accordionHeaderBtns[l].classList.add('collapsed')
            if(accordionHeader[i].querySelector('button') != accordionHeaderBtns[l]){
                accordionHeaderBtns[l].classList.remove('active')
            }
            accordionHeaderBtns[l].setAttribute('aria-expanded',false);

        }
        accordionHeader[i].querySelector('button').classList.toggle('active')

        
        for(let i =0;i<accordionCollapses.length;i++){
            accordionCollapses[i].classList.remove('show')
        }
        activeBtn = accordionHeader[i].querySelector('button');

    })

}




const accordionHeaderLeft = document.querySelectorAll('.accordion-headerleftAcc') 
const accordionHeaderBtnsLeft = document.querySelectorAll('.accordion-headerleftAcc button') 
const accordionCollapsesLeft = document.querySelectorAll('.accordion-collapseleftAcc') 
for(let i =0;i<accordionHeaderLeft.length;i++){
    accordionHeaderLeft[i].addEventListener('click',(e) =>  {
        for(let l =0;l<accordionHeaderBtnsLeft.length;l++){
            accordionHeaderBtnsLeft[l].classList.add('collapsed')

            if(accordionHeaderLeft[i].querySelector('button') != accordionHeaderBtnsLeft[l]){
                accordionHeaderBtnsLeft[l].classList.remove('active')

            }

            accordionHeaderBtnsLeft[l].setAttribute('aria-expanded',false);
        }
        accordionHeaderLeft[i].querySelector('button').classList.toggle('active')

        for(let i =0;i<accordionCollapsesLeft.length;i++){
            accordionCollapsesLeft[i].classList.remove('show')
        }
    })

}