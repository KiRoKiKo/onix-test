const elements = document.querySelectorAll('a');

elements.forEach((i) => {
    i.addEventListener('click', function (e) {
        e.preventDefault();
        const active = document.querySelector('a.active');
        if (active) {
            active.classList.remove('active');
        }
        e.target.classList.add('active');
    });
});