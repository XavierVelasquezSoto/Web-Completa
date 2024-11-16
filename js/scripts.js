const iconMenuElement = document.getElementById("icon-menu")
const menuElement = document.getElementById("menu")


const toggleMenu = () => {
    menuElement.classList.toggle("menu-show")
}


iconMenuElement.addEventListener("click", toggleMenu)