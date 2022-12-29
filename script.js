const navBtn = document.querySelector(".navigation__mobile-btn");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function () {
    header.classList.toggle("nav-open");
})
