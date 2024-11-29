document.addEventListener('DOMContentLoaded', (e) => {
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');
  const menuBtnIcon = menuBtn.querySelector('i');

  menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuBtnIcon.setAttribute(
      'class',
      isOpen ? 'ri-close-line' : 'ri-menu-line'
    );
  });

  navLinks.addEventListener('click', (e) => {
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class', 'ri-menu-line');
  });

  const scrollRevealOption = {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
  };

  ScrollReveal().reveal('.header__image img', {
    ...scrollRevealOption,
    origin: 'right',
  });

  ScrollReveal().reveal('.header__content h1', {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal('.header__content p', {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal('.header__btns', {
    ...scrollRevealOption,
    delay: 1500,
  });

  // banner section
  const banner = document.querySelector('.banner__container');
  const bannerContent = Array.from(banner.children);

  bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute('aria-hidden', true);
    banner.appendChild(duplicateNode);
  });

  ScrollReveal().reveal('.arrival__card', {
    ...scrollRevealOption,
    interval: 500,
  });
});
