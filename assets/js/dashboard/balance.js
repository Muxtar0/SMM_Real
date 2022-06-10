const showHiddenBalance = document.querySelectorAll('.showHiddenBalance')
const balanceText = document.querySelectorAll('.balanceText span')
let balanceHidden = false;


for(let i = 0 ; i < showHiddenBalance.length;i++ ){
    showHiddenBalance[i].addEventListener('click' , (e) => {
        balanceHidden = !balanceHidden
        for(let i = 0 ; i < showHiddenBalance.length;i++ ){
            if(balanceHidden == false){
                showHiddenBalance[i].innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
            }
            else if(balanceHidden == true){
                showHiddenBalance[i].innerHTML = `<i class="fa-solid fa-eye"></i>`
            }
        }
        for(let i = 0 ; i < balanceText.length;i++ ){
            if(balanceHidden == false){
                balanceText[i].innerHTML = `10.00`
            }
            else if(balanceHidden == true){
                balanceText[i].innerHTML = `**.**`
            }
        }
    })
}