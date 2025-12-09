
const navbar = document.getElementById("page-navbar");
const header = document.getElementById("page-header")
const buttonMenu = navbar.querySelector(".nav__menu-button");
const logoImg = navbar.querySelector(".nav__logo")
const body = document.querySelector("body");

const closeMenuIconHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9844 2.42188L9.40625 8L14.9844 13.5781L13.5781 14.9844L8 9.40625L2.42188 14.9844L1.01562 13.5781L6.59375 8L1.01562 2.42188L2.42188 1.01562L8 6.59375L13.5781 1.01562L14.9844 2.42188Z" fill="currentColor"/>
    </svg>`;

const openMenuIconHTMl = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;


const handleWindowSize = () => {

    if (window.innerWidth < 643) {
        closeMenu();
        navbar.classList.add("nav--mobile");
    } else {
        closeMenu();
        navbar.classList.remove("nav--mobile");
        navbar.classList.remove("nav--mobile--close");
    }
}

window.addEventListener('load', (e) => { handleWindowSize() });
window.addEventListener('resize', (e) => { handleWindowSize() });

const openMenu = () => {
    buttonMenu.innerHTML = closeMenuIconHTML;
    // logoImg.src = 'assets/images/logo/guavet-header-logo-colorida.svg'

    navbar.classList.add("nav--mobile--open");
    navbar.classList.remove("nav--mobile--close");

    buttonMenu.setAttribute("aria-expanded", "true");

    header.classList.add("header--fixed");
    body.classList.add("no-scroll");
}

const closeMenu = () => {
    buttonMenu.innerHTML = openMenuIconHTMl;
    // logoImg.src = 'assets/images/logo/guavet-header-logo.svg';

    navbar.classList.add("nav--mobile--close");
    navbar.classList.remove("nav--mobile--open");

    buttonMenu.setAttribute("aria-expanded", "false");

    header.classList.remove("header--fixed");
    body.classList.remove("no-scroll");
}

buttonMenu.addEventListener("click", () => {
    if (navbar.classList.contains("nav--mobile--open")) {
        closeMenu();
        return;
    }

    openMenu();
})
