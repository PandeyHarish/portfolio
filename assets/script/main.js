// qualification tabs

const work = document.getElementById('work');
work.style.display = 'none';
const education = document.getElementById('education');
function showwork(){
    education.style.display = 'none';
    work.style.display = 'block';
}

function showeducation(){
    work.style.display = 'none';
    education.style.display = 'block';
}

// services modal
document.getElementById('modal').style.display = 'none';
document.getElementById('modal1').style.display = 'none';
function open0(){
    document.getElementById('modal').style.display = 'block'
}
function open1(){
    document.getElementById('modal1').style.display = 'block'
}
function close0(){
    
    document.getElementById('modal').style.display = 'none'
    document.getElementById('modal1').style.display = 'none'
}
