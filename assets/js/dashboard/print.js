const printBtn = document.querySelector('.printBtn')
printBtn.addEventListener('click' , (e) => {
    window.print();return false;
})