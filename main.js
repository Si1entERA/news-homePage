const hamburgerMenu = document.querySelector('.hamburgerMenu');
const close = document.querySelector('.close');

const sidebar = document.querySelector('.sidebar')

const closeMenu = () => {
  sidebar.style.display = 'none';
}

const openMenu = () => {
  sidebar.style.display = 'flex'
}

close.addEventListener('click', closeMenu)
hamburgerMenu.addEventListener('click', openMenu)