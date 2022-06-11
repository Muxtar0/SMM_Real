const filterBtnFirst = document.querySelector('.filterBtnFirst');
const filterDropDownDivFirst = document.querySelector('.filterDropDownDivFirst');

filterBtnFirst.addEventListener('click' , (e) => {
    filterDropDownDivFirst.classList.toggle('hidden')
})