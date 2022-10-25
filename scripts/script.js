// Hamburger Menu
// This hamburger menu makes extensive use of markup/code shared by ljc-dev at https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0

const menu = document.querySelector("ul.topMenu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburgerButtons = document.querySelector(".hamburgerMenu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

function toggleHamburger(){
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        hamburgerIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        hamburgerIcon.style.display = "none";
    }
};

menuItems.forEach(
    function(menuItem){
        menuItem.addEventListener("click", toggleHamburger);
    }
)

hamburgerButtons.addEventListener("click", toggleHamburger);