let nav = document.querySelector('header nav')
let getstarter = document.querySelector('.getstarted')
    
       window.addEventListener("scroll",function(){
           let top = window.scrollY;
           if (top >= 320) {
               nav.classList.add('nav-bg');
               getstarter.classList.add('startedbg');
               
            } else{
                nav.classList.remove('nav-bg');
                getstarter.classList.remove('startedbg');               
            } 
        }) 
