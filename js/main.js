


const btnBtnSec = document.querySelector('.button--secondary');
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.modal--close')


const modalOpen = () => {
    modal.classList.remove('modal--close')
}
const modalClose = () => {
    modal.classList.add('modal--close')
}

btnBtnSec.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalClose);


