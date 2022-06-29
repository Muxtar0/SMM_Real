const tabContents = document.querySelectorAll('#ProfessionallyExperienced .tabContent') 
const tabBtns = document.querySelectorAll('#ProfessionallyExperienced .tabBtn') 

for(let i = 0 ; i < tabBtns.length;i++){
    tabBtns[i].addEventListener('click' , (e) => {
        for(let i = 0 ; i < tabContents.length;i++){
            tabContents[i].classList.remove('active')
            tabContents[i].classList.remove('activ2')
        }
        for(let i = 0 ; i < tabBtns.length;i++){
            tabBtns[i].classList.remove('active')
        }
        if(tabBtns[i].getAttribute('data-target') == tabContents[i].getAttribute('data-way')){
            tabContents[i].classList.add('active');
            setTimeout(() => {
                tabContents[i].classList.add('active2');
            }, 100);
            tabBtns[i].classList.add('active')
        }
    })
}