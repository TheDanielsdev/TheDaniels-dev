/*const theDaniels = document.querySelector(".btn-toggle");

theDaniels.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
})*/

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-theme");
}



const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
    }


}, 1000);