const hamburgerMenu = document.querySelector('.hamburgerMenu');
const closeSidebar = document.querySelector('.close');

const sidebar = document.querySelector('.sidebar')
const body = document.body;

const closeMenu = () => {
  sidebar.classList.remove('open')
  body.classList.remove('lock')
}

const openMenu = () => {
  sidebar.classList.add('open')
  body.classList.add('lock')
}

closeSidebar.addEventListener('click', closeMenu)
hamburgerMenu.addEventListener('click', openMenu)