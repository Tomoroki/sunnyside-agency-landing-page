// (function () {
//     const hamburger = document.querySelector(".nav__hamburger");
//     const list = document.querySelector(".nav__list");

//     // if (hamburger) {
//     //     hamburger.addEventListener("click", () => {
//     //         hamburger.classList.toggle("is-active");
//     //         list.classList.toggle("nav__items--show");
//     //     });
//     // }
//     // iterar sobre los elementos del nav__list
//     const items = document.querySelectorAll(".nav__list");
//     // le ponemos un if para que solo se ejecute si existe el elemento
//     if (items) {
//         items.forEach(e => {
//             console.log(e);
//             e.addEventListener("click", () => {
//                 list.classList.remove("nav__items--show");
//                 hamburger.classList.remove("is-active");
//             });
//         });
//     }
//     document.onclick = function (e) {
//         if (e.target.classList !== "nav__list" && e.target.classList !== "nav__hamburger") {
//             list.classList.remove("nav__items--show");
//             hamburger.classList.remove("is-active");
//         }
//     };
// })();

/** FUNCIONAAAAAAAAAAAAAAAAAA
    AAAAAAAAAAAAAAAAAAAAAAAAAAAA
    AAAAAAAAAAAAAAAAAAAAAAAAAAA DE AMBAS FORMAS
 */
const hamburger = document.querySelector(".nav__hamburger");
const list = document.querySelector(".nav__list");
// const hamburger = document.querySelector("#toggle");
// const list = document.querySelector("#sidebar");

document.onclick = function (e) {
    if (e.target.classList[0] !== "nav__hamburger" && e.target.classList[0] !== "nav__list") {
        console.log("click fuera");
        list.classList.remove("nav__items--show");
        hamburger.classList.remove("is-active");
    }

    // FUNCIONA PERFECTAMENTE CON LOS IDS
    // if (e.target.id !== "toggle" && e.target.id !== "sidebar") {
    //     console.log("click fuera");
    //     list.classList.remove("nav__items--show");
    //     hamburger.classList.remove("is-active");
    // }
};

hamburger.onclick = function () {
    console.log("click");
    hamburger.classList.toggle("is-active");
    list.classList.toggle("nav__items--show");
};
