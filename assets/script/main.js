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

// checks for theme
// const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
// if (darkThemeMq.matches) {
  // Theme set to dark.
// } else {
  // Theme set to light.
// }


var sun1 = document.getElementById('sun1');
var moon1 = document.getElementById('moon1');
sun1.classList.add('hidden');
// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
function dark() {   
     if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
    sun.classList.toggle('hidden');
    moon.classList.toggle('hidden');
    sun1.classList.toggle('hidden');
    moon1.classList.toggle('hidden');
    } else {
    setTheme('theme-dark');
    sun.classList.toggle('hidden');
    moon.classList.toggle('hidden');
    sun1.classList.toggle('hidden');
    moon1.classList.toggle('hidden');
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

//  mobile nav
var mnav=document.getElementById('mobnav');
            var mnavo=document.getElementById('mnavo');
            var mnavc=document.getElementById('mnavc');
    
            mnav.style.marginLeft = '-110%';
    
    
            mnavc.style.display = "none";
    
            function mobNav(){
                if(mnav.style.marginLeft == '-110%'){
    
                    mnav.style.marginLeft = '0px';
                    mnav.style.transition = '0.7s';
                    mnavo.style.display = "none";
                    mnavc.style.display = "block";
    
                } else {
                    mnav.style.marginLeft = '-110%';
                    mnav.style.transition = '0.7s';
                    mnavo.style.display = "block";
                    mnavc.style.display = "none";
                }
            }

        


//  typing effect
var typed = new Typed(".auto-type",{
    strings: ["Fullstack Developer","Freelancer"],
    typeSpeed: 80,
    backSpeed: 80,
    loop:true
})