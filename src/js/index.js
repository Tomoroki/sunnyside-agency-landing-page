(function () {
    const hamburger = document.querySelector('.nav__hamburger');
    const list = document.querySelector('.nav__list');
    console.log(hamburger);
    console.log(list);
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle("is-active");
            list.classList.toggle("nav__items--show");
        });
    };

})();
