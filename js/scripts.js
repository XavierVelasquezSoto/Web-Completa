const iconMenuElement = document.getElementById("icon-menu")
const menuElement = document.getElementById("menu")


const toggleMenu = () => {
    menuElement.classList.toggle("menu-show")

    if ( iconMenuElement.src.includes("hamburger.svg") )
        {
            iconMenuElement.src = `./assets/img/icons/close.svg`
            iconMenuElement.src = `../assets/img/icons/close.svg`
        }
    else
        {
            iconMenuElement.src = `./assets/img/icons/hamburger.svg`
            iconMenuElement.src = `../assets/img/icons/hamburger.svg`
        }
}

iconMenuElement.addEventListener("click", toggleMenu)