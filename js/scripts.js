const iconMenuElement = document.getElementById("icon-menu")
const menuElement = document.getElementById("menu")


const toggleMenu = () => {
    menuElement.classList.toggle("menu-show")

    if ( iconMenuElement.src.includes("hamburger.svg") )
        {
            /* iconMenuElement.src = `./assets/img/icons/close.svg` */
            iconMenuElement.src = `../assets/img/icons/close.svg`
        }
    else
        {
           /*  iconMenuElement.src = `./assets/img/icons/hamburger.svg` */
            iconMenuElement.src = `../assets/img/icons/hamburger.svg`
        }
}

iconMenuElement.addEventListener("click", toggleMenu)



/* const accordionElement = document.getElementById('faq-hidden');
const allAccordionTexts = document.querySelectorAll('.faq-text');

const toggleAccordionText = event => {
  console.log(event.target);
  // for (const accordionText of allAccordionTexts) {
  //   accordionText.classList.remove('accordion-text-show');
  // }

  event.target.children[0].children[1].classList.toggle('faq-hidden-show');
};

accordionElement.addEventListener('click', toggleAccordionText); */


const accordionElement = document.getElementById('faq-hidden');

const toggleAccordionText = event => {
  event.target.classList.toggle('faq-hidden-show');
  console.log(accordionElement.classList);
};

accordionElement.addEventListener('click', toggleAccordionText);


