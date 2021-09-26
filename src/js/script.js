// active
const elements = document.querySelectorAll('.nav__link');

elements.forEach((i) => {
    i.addEventListener('click', function (e) {
        const active = document.querySelector('.nav__link.active');
        if (active) {
            active.classList.remove('active');
        }
        e.target.classList.add('active');
    });
});

// hamburger 
const hamburger = document.querySelector('.header__hamburger'),
      sidebar = document.querySelector('.hub-page__sidebar'),
      close = document.querySelector('.searchpanel__close');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('active-sidebar');
});

close.addEventListener('click', () => {
    sidebar.classList.remove('active-sidebar');
});