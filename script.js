const nav_item = document.querySelector('.nav_responsive_item');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    nav_item.classList.toggle('active');
});
