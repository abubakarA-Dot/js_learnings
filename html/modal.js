const openBtn = document.querySelector('#open-btn');
const modalContainer = document.querySelector('#modal-container');
const closeBtn = document.querySelector('#close-btn');


openBtn.addEventListener('click', openBtnFunc);

function openBtnFunc(){
    modalContainer.style.display = 'block';
}
closeBtn.addEventListener('click', closeBtnFunc);

function closeBtnFunc(){
    modalContainer.style.display = 'none';
}