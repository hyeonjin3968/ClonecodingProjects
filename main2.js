const toggleBtn = document.querySelector('.navbar__toggleBtn');
const infos = document.querySelector('.navbar__infos');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    infos.classList.toggle('active');
    icons.classList.toggle('active');
})