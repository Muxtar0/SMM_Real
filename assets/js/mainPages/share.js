const filterBtns = document.querySelectorAll('.shareBtn');
const filterDropDownDivs = document.querySelectorAll('.shareDropDownDiv');

for(let i = 0 ; i < filterBtns.length;i++){
    filterBtns[i].addEventListener('click' , (e) => {
        e.stopPropagation();
        filterDropDownDivs[i].classList.toggle('hidden')
        filterBtns[i].classList.toggle('active')
    })
}

for(let i = 0 ; i < filterDropDownDivs.length;i++){
    filterDropDownDivs[i].addEventListener('click' , (e) =>  {
        e.stopPropagation();
    })
}



window.addEventListener("click",(e) => {
    if(!e.target.matches("filterDropDownDiv") && !e.target.matches('.filterBtn')){
        for(let i = 0 ; i < filterDropDownDivs.length;i++){
            filterDropDownDivs[i].classList.add('hidden')

        }
        
    }
})

