const selectedTextService  = document.querySelector('.selectForService .selectedText');
const selectService = document.querySelector('.selectForService')
const selectionsLi = document.querySelectorAll('.selectionsForService li')
const selectionsService = document.querySelector('.selectionsForService')

selectService.addEventListener('click',(e) => {
    selectionsService.classList.toggle('hidden')
})

for(let i = 0 ; i < selectionsLi.length;i++){
    selectionsLi[i].addEventListener("click",(e) => {
        e.preventDefault();
        const data = selectionsLi[i].getAttribute('data-value');
        selectedTextService.textContent=data;
        selectedTextService.setAttribute('data-selectedValue',data)

    })
}