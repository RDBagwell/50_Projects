const circles = document.querySelectorAll('.circle');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const progressBar = document.getElementById('progress');
let index = 0;
let progressPrecent = 0;

function addIndex() {
    if(index > -1){
        prevBtn.disabled = false;
    }
    if(index === circles.length -2){
        nextBtn.disabled = true;
    }
    if(index < circles.length -1){
        index = index + 1;
    }
    progressPrecent = progressPrecent + getPrecent();
    progressBar.style.width = progressPrecent+'%';
    circles[index].classList.add('active')
}

function subIndex() {
    if(index < 2){
        prevBtn.disabled = true;
        nextBtn.disabled = false;
    }
    index = index - 1;
    if(index < 0){
        index = 0;
    }
    progressPrecent = progressPrecent - getPrecent();
    progressBar.style.width = progressPrecent+'%';
    circles[index+1].classList.remove('active')
}

function getPrecent(){
    return Math.trunc(100 / (circles.length -1));
}

nextBtn.addEventListener('click', addIndex);
prevBtn.addEventListener('click', subIndex)
