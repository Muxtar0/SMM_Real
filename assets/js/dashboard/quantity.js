const quantityInput = document.querySelector('.quantityInput')
const uploadMoneyBTNs = document.querySelectorAll('.uploadMoneyBTN')

for(let i = 0 ; i < uploadMoneyBTNs.length;i++){
    uploadMoneyBTNs[i].addEventListener('click' , (e) => {
        for(let l = 0 ; l < uploadMoneyBTNs.length;l++){
            uploadMoneyBTNs[l].classList.remove('active')
        }
        uploadMoneyBTNs[i].classList.add('active')
        quantityInput.value = uploadMoneyBTNs[i].querySelector('.text h4').textContent
    })
}

quantityInput.addEventListener('input' ,(e) => {
    for(let l = 0 ; l < uploadMoneyBTNs.length;l++){
        uploadMoneyBTNs[l].classList.remove('active')
    }
    for(let i = 0 ; i < uploadMoneyBTNs.length;i++){
        
        if(e.target.value == uploadMoneyBTNs[i].querySelector('.text h4').textContent ){
            uploadMoneyBTNs[i].classList.add('active')
        }
    }
})