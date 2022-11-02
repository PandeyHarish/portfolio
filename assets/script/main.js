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

var sun = document.getElementById('sun');
var moon = document.getElementById('moon');
sun.classList.add('hidden');
// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
function dark() {   
     if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
    moon.style.display = 'block'
    sun.style.display = 'none'
    } else {
    setTheme('theme-dark');
    sun.style.display = 'block'
    moon.style.display = 'none'
}
 }
 // Immediately invoked function to set the theme on initial load
 (function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');

    } else {
        setTheme('theme-light');
    }
})();


//  document.getElementById('moon').style.display = 'none';
        

//         // function to toggle between light and dark theme
//         function toggleTheme() {
           
//         }

        


//  typing effect
var typed = new Typed(".auto-type",{
    strings: ["Fullstack Developer","Freelancer"],
    typeSpeed: 80,
    backSpeed: 80,
    loop:true
})

// owl caurosel
