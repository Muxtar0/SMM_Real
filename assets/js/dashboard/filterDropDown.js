const filterBtnFirst = document.querySelector('.filterBtnFirst');
const filterItemFirst = document.querySelector('.filterItemFirst');
const filterDropDownDivFirst = document.querySelector('.filterDropDownDivFirst');

// filterBtnFirst.addEventListener('click' , (e) => {
//     filterDropDownDivFirst.classList.toggle('hidden')
// })

window.addEventListener('click' , (e) => {
    if(e.target.className == "filterBtnFirst"){
        filterDropDownDivFirst.classList.toggle('hidden')
    }
    else if(e.target.className != "filterItemFirst"){
        filterDropDownDivFirst.classList.toggle('hidden')

    }
})