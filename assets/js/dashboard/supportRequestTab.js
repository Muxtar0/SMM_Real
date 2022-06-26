const tabBtn = document.querySelectorAll('.tabBtn')
const tabContent = document.querySelectorAll('.tabContent')

for(let i= 0 ; i < tabBtn.length;i++){
    tabBtn[i].addEventListener('click' , (e) => {
        let btnWay = tabBtn[i].getAttribute('data-way');
        for(let i= 0 ; i < tabBtn.length;i++){
            tabBtn[i].classList.remove('active')
        }
        for(let i= 0 ; i < tabContent.length;i++){
            tabContent[i].classList.remove('active')
            tabContent[i].classList.remove('active2')
        }
        for(let i= 0 ; i < tabContent.length;i++){
            if(btnWay == tabContent[i].getAttribute('data-kind')){
                tabContent[i].classList.add("active")
                setTimeout(() => {
                    tabContent[i].classList.add("active2")
                }, 100);
            }
        }
        tabBtn[i].classList.add("active")
        
    })
}