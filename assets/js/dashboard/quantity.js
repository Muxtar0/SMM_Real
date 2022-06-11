const quantityInput = document.querySelector('.quantityInput')
const uploadMoneyBTNs = document.querySelectorAll('.uploadMoneyBTN')

for(let i = 0 ; i < uploadMoneyBTNs.length;i++){
    uploadMoneyBTNs[i].addEventListener('click' , (e) => {
        quantityInput.value = uploadMoneyBTNs[i].querySelector('.text h4').textContent
    })
}