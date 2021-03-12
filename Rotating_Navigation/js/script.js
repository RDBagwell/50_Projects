const openBTN = document.getElementById('open');
const closeBTN = document.getElementById('close');
const container = document.querySelector('.container');

openBTN.addEventListener('click', ()=>{
    container.classList.add('show-nav');
})

closeBTN.addEventListener('click', ()=>{
    container.classList.remove('show-nav');
})