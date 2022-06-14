const countryList = document.querySelector(".country-list");
const country = document.querySelector(".country");
const arrowIcon = document.querySelector(".arrow-icon");

country.addEventListener("click", () => {
  arrowIcon.classList.toggle("active");
  countryList.classList.toggle("active");
});

let = countryName = document.querySelectorAll(".country-name");
let = activeCountry = document.querySelector(".active-country");
activeCountry.innerHTML = "English";

for (let i = 0; i < countryName.length; i++) {
  countryName[i].addEventListener("click", () => {
    const countyValue = countryName[i].innerHTML;
    activeCountry.innerHTML = countyValue;
  });
}