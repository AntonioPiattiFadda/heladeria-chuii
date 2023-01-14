/*Swipper*/

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

const MobileMenuButton = document.querySelector('.navbar__menu-icon');
const NavbarTop = document.querySelector('.navbar__top');

MobileMenuButton.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    console.log('Clickeaste el menu');
    NavbarTop.classList.toggle('inactive');
  }

