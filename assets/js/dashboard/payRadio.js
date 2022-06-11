const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input[name="pay_method"]')
let mainClass;
for(let i = 0 ; i < labels.length;i++){
    labels[i].addEventListener("click", () => {
        for(let i = 0 ; i < labels.length;i++){
            labels[i].classList.remove('selected')
        }
        for(let i = 0 ; i < inputs.length;i++){
            if(inputs[i].checked){
              mainClass = inputs[i].value;  
            }
        }
        if(mainClass == labels[i].getAttribute('for')){
            labels[i].classList.add('selected')
        }
    });        
}