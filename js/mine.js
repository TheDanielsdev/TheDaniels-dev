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



// When the user scrolls the page, execute myFunction (for the scroll indicator)

window.onscroll = function() { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}