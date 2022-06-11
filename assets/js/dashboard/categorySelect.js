const selectedText = document.querySelector('.selectForCategory .selectedText');
const select = document.querySelector('.selectForCategory')
const selectionsli = document.querySelectorAll('.selectForCategory .selections li')
const selections = document.querySelector('.selectForCategory .selections')

select.addEventListener('click',(e) => {
    selections.classList.toggle('hidden')
})

for(let i = 0 ; i < selectionsli.length;i++){
    selectionsli[i].addEventListener("click",(e) => {
        e.preventDefault();
        const data = selectionsli[i].getAttribute('data-value');
        selectedText.innerHTML=data;
        selectedText.setAttribute('data-selectedValue',data)

    })
}