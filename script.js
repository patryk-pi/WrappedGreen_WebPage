const navBtn = document.querySelector(".navigation__mobile-btn");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function () {
    header.classList.toggle("nav-open");
})


let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;
const sectionHero = document.querySelector(".section-hero")

console.log(viewportHeight);

function checkHeight() {
    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;

    if (viewportWidth <= 500) {
        if (viewportHeight > 900 ) {
            sectionHero.style.height = "44vh";
        } else if (viewportHeight > 790 && viewportHeight < 899) {
            sectionHero.style.height = "50vh";
        } else if (viewportHeight > 750 && viewportHeight < 799) {
            sectionHero.style.height = "52vh";
        } else if (viewportHeight < 750) {
            sectionHero.style.height = "56vh";
        }
    } else {
        sectionHero.style.height = "auto"
    }
}

checkHeight();
// window.addEventListener("resize", checkHeight);


const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"});
        }

        // Close mobile navigation
        if (link.classList.contains("navigation__link"))
            header.classList.toggle("nav-open");
    });
});