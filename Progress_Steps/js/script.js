const circles = document.querySelectorAll('.circle');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const progressBar = document.getElementById('progress');
let index = 0;
let progressPrecent = 0;

function addIndex() {
    index++;
    if(index > -1){
        prevBtn.disabled = false;
    }
    if(index >= circles.length - 1){
        index = circles.length - 1;
        nextBtn.disabled = true;
    }
    circles[index].classList.add('active');
    addPrecent();
    updateProgressBar();
}

function subIndex() {
    index--;
    if(index <= 0){
        index = 0;
        prevBtn.disabled = true;
    }
    if(nextBtn.disabled = true){
        nextBtn.disabled = false;
    }
    circles[index+1].classList.remove('active');
    subPrecent();
    updateProgressBar();
}

function addPrecent() {
    progressPrecent = progressPrecent + getPrecent();
    if(progressPrecent > 100){
        progressPrecent = 100
    }
}

function subPrecent() {
    progressPrecent = progressPrecent - getPrecent();
    if(progressPrecent < 0){
        progressPrecent = 0
    }
}

function getPrecent(){
    return Math.trunc(100 / (circles.length -1));
}

function updateProgressBar() {
    progressBar.style.width = progressPrecent+'%';
}

nextBtn.addEventListener('click', addIndex);
prevBtn.addEventListener('click', subIndex);