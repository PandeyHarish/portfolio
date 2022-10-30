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

// swiper
let swiper = new Swiper(".mySwiper,.mySwiper1", {
    cssMode: true,
    loop:true,
    autoplay:{
        delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    mousewheel: true,
    keyboard: true,
  });

//   Show scroll top
        var upbutton = document.getElementById('upbutton');
        upbutton.style.display = 'none';
        window.onscroll = function(){
            scrollfunction();
        }
        function scrollfunction(){
            if(window.scrollY > 200)
            {
                upbutton.style.display = 'block';

            }
            else
            {
                upbutton.style.display = 'none';
            }
        }

        function gototop()
        {
            window.scrollTo({top:0, behavior:'smooth'});
        }

// dark light theme
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'ri-sun-line'
// previously selected topic
// const selectedTheme = localStorage.getItem('selected-theme')
// const  selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that interface has by validating the dark-theme class
// const getCurrentTheme = () =>document.body.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () =>document.body.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// we validate if the user chose a topic
// if(selectedTheme){
//     document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](darkTheme)
//     themeButton.classList[selectedIcon == 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
// }

// activate /deactivate the theme manually with the button
// themeButton.addEventListener('click', () =>{
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)

//     // we save the theme and th current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })

document.getElementById('sun').style.display = 'none'
function dark() {   
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById('sun').style.display = 'block'
    document.getElementById('moon').style.display = 'none'
 }
 function light() {
    var element = document.body;
    element.classList.remove("dark-mode");
    document.getElementById('moon').style.display = 'block'
    document.getElementById('sun').style.display = 'none'
    
 }