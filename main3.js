const moreBtn = document.querySelector('.info .titleAndButtons .moreBtn');
const title = document.querySelector('.info .titleAndButtons .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});