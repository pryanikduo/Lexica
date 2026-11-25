const dropdown = document.querySelector('.dropdown-menu');
const button = document.querySelector('.dropdown-icon');
const menu = document.querySelector('.dropdown-list');

function toggleMenu(forceState) {
    const isOpen = typeof forceState === 'boolean'
        ? forceState
        : !menu.classList.contains('open');

    menu.classList.toggle('open', isOpen);
    button.setAttribute('aria-expanded', String(isOpen));
}

button.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', (event) => {
    if(!dropdown.contains(event.target)) {
        toggleMenu(false);
    }
});