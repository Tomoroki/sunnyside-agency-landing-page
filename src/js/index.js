import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
document.addEventListener("DOMContentLoaded", function () {
    scrollNav();
});

const hamburger = document.querySelector(".nav__hamburger");
const list = document.querySelector(".nav__list");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    list.classList.toggle("nav__items--show");
});
document.addEventListener("click", (e) => {
    const target = e.target.classList[0];
    if (target !== "nav__hamburger" && target !== "nav__list") {
        hamburger.classList.remove("is-active");
        list.classList.remove("nav__items--show");
    }
});

function scrollNav() {
    const linksNav = document.querySelectorAll(".nav__list li");
    linksNav.forEach(function (enlace) {
        enlace.addEventListener("click", scrollSmooth);
    });

    const linksFooter = document.querySelectorAll(".links");
    linksFooter.forEach(function (enlace) {
        enlace.addEventListener("click", scrollSmooth);
    });

    const btnBack = document.querySelector(".back a");
    btnBack.addEventListener("click", function (e) {
        e.preventDefault();
        const att = document.querySelector(btnBack.attributes.href.value);
        att.scrollIntoView({
            behavior: "smooth"
        });
    });
}

function scrollSmooth(e) {
    e.preventDefault();
    const seccion = document.querySelector(e.target.attributes.href.value);
    seccion.scrollIntoView({
        behavior: "smooth"
    });
}
