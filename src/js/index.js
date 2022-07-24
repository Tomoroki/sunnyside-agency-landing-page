(function () {
    const hamburger = document.querySelector(".nav__hamburger");
    const list = document.querySelector(".nav__list");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("is-active");
            list.classList.toggle("nav__items--show");
        });
    }
    // iterar sobre los elementos del nav__list
    const items = document.querySelectorAll(".nav__list");
    // le ponemos un if para que solo se ejecute si existe el elemento
    if (items) {
        items.forEach(e => {
            console.log(e);
            e.addEventListener("click", () => {
                list.classList.remove("nav__items--show");
                hamburger.classList.remove("is-active");
            });
        });
    }
})();
