var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();


window.addEventListener('scroll', reveal);

       function reveal(reveal) {
        var reveals = document.querySelectorAll('.reveal');

        for (let i = 0; i < reveals.length; i++) {
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 60;

          if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
          } else {
            reveals[i].classList.remove('active');
          }
        }
       }