const countryList = document.querySelector(".country-list");
const country = document.querySelector(".country");
const arrowIcon = document.querySelector(".arrow-icon");

country.addEventListener("click", () => {
  arrowIcon.classList.toggle("active");
  countryList.classList.toggle("active");
});

let = countryName = document.querySelectorAll(".country-name");
let = countrySelect = document.querySelectorAll(".countrySelect");
let = activeCountry = document.querySelector(".active-country");
let = activeCountryImage = document.querySelector(".activeCountryImage");

activeCountry.innerHTML = "English";

for (let i = 0; i < countrySelect.length; i++) {
  countrySelect[i].addEventListener("click", () => {
    const countyValue = countrySelect[i].querySelector('.country-name').innerHTML;
    activeCountry.innerHTML = countyValue;
    activeCountryImage.src = countrySelect[i].querySelector('img').src
  });
}