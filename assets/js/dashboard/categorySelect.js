const selectedText = document.querySelector('.selectForCategory .selectedText');
const select = document.querySelector('.selectForCategory')
const selectionsli = document.querySelectorAll('.selectForCategory .selections li')
const selections = document.querySelector('.selectForCategory .selections')
const selectionsService = document.querySelector('.selectionsForService')
const closeSelectionsForCategory = document.querySelector('.closeSelectionsForCategory')


select.addEventListener('click',(e) => {
    e.stopPropagation();
    selectionsService.classList.add('hidden')
    selections.classList.toggle('hidden')
})
selections.addEventListener('click',(e) => {
    e.stopPropagation();
})
window.addEventListener('click' , (e) => {
    if(!e.target.matches('.selectForCategory .selections') && !e.target.matches('.selectForCategory')){
        selectionsService2.classList.add('hidden')
        selections2.classList.add('hidden')
    }
})
for(let i = 0 ; i < selectionsli.length;i++){
    selectionsli[i].addEventListener("click",(e) => {
        e.preventDefault();
        const data = selectionsli[i].getAttribute('data-value');
        selectedText.innerHTML=data;
        selectedText.setAttribute('data-selectedValue',data)
    selections.classList.toggle('hidden')


    })
}
closeSelectionsForCategory.addEventListener('click' ,(e) => {
    selections.classList.add('hidden')
})