const selectedTextService  = document.querySelector('.selectForService .selectedText');
const selectService = document.querySelector('.selectForService')
const selectionsLi = document.querySelectorAll('.selectionsForService li')
const selectionsService2 = document.querySelector('.selectionsForService')
const selections2 = document.querySelector('.selectForCategory .selections')

selectService.addEventListener('click',(e) => {
    e.stopPropagation();
    selectionsService2.classList.toggle('hidden')
    selections2.classList.add('hidden')
})
selectionsService2.addEventListener('click',(e) => {
    e.stopPropagation();
})
window.addEventListener('click' , (e) => {
    if(!e.target.matches('.selectionsForService') && !e.target.matches('.selectForService')){
        selectionsService2.classList.add('hidden')
        selections2.classList.add('hidden')
    }
})
for(let i = 0 ; i < selectionsLi.length;i++){
    selectionsLi[i].addEventListener("click",(e) => {
        e.preventDefault();
        let data = selectionsLi[i].getAttribute('data-value');
        if(window.innerWidth < 992){
            if(data.length > 68){
                data =  data.substring(0,68) + "..."
                selectedTextService.textContent=data;
    
            }
            else{
                
                selectedTextService.textContent=data;
            }
        }
        else{
            selectedTextService.textContent=data;

        }
        
        selectedTextService.setAttribute('data-selectedValue',data)
        

    })
}