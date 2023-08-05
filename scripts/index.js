const toggleNav = document.getElementById('toggleNav');
    const navbar = document.querySelector('.navbar');

    toggleNav.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });