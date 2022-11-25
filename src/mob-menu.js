(() => {
  const refs = {
    body: document.querySelector('body'),
    mobMenuBtn: document.querySelector('[data-menu-btn]'),
    menu: document.querySelector('[data-menu]'),
    svgBurgerIcon: document.querySelector('.icon-open-btn'),
    svgCrossIcon: document.querySelector('.icon-close-btn')
  };

  refs.mobMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.svgBurgerIcon.classList.toggle('is-open');
    refs.svgCrossIcon.classList.toggle('is-open');
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();