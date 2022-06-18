const selectedTextService  = document.querySelector('.selectForService .selectedText');
const selectService = document.querySelector('.selectForService')
const selectionsLi = document.querySelectorAll('.selectionsForService li')
const selectionsService2 = document.querySelector('.selectionsForService')
const selections2 = document.querySelector('.selectForCategory .selections')

selectService.addEventListener('click',(e) => {
    if(e.target.className == "serviceSaveBTN"){

    }
    if(e.target.parentElement.className == "serviceSaveBTN"){

    }
    else{
        selectionsService2.classList.toggle('hidden')
        selections2.classList.add('hidden')
    }
    

})

for(let i = 0 ; i < selectionsLi.length;i++){
    selectionsLi[i].addEventListener("click",(e) => {
        e.preventDefault();
        let data = selectionsLi[i].getAttribute('data-value');
        console.log(data)
        if(data.length > 50){
            data =  data.substring(0,50) + "..."
            selectedTextService.textContent=data;

        }
        else{
            
            selectedTextService.textContent=data;
        }
        selectedTextService.setAttribute('data-selectedValue',data)
        

    })
}