const hamburgerMenu = document.querySelector('.hamburgerMenu');
const closeSidebar = document.querySelector('.close');
const overlay = document.getElementById("overlay");

const sidebar = document.querySelector('.sidebar')
const body = document.body;

const closeMenu = () => {
  sidebar.classList.remove('open')
  body.classList.remove('lock')
  overlay.style.display = 'none';

}

const openMenu = () => {
  sidebar.classList.add('open')
  body.classList.add('lock')
  overlay.style.display = 'block';
}

closeSidebar.addEventListener('click', closeMenu)
hamburgerMenu.addEventListener('click', openMenu)
