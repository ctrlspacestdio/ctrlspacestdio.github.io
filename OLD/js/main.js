 $(document).ready(function () {
    $('.owl-one').owlCarousel({
        loop:true,
        responsiveClass:true,
        margin:12,
        nav:false,
        autoplay:true,
        autoplayHoverPause:true,
        autoplaySpeed:1000,
        smartSpeed:1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

$('.owl-two').owlCarousel({
    loop:true,
    responsiveClass:true,
    margin:12,
    nav:false,
    autoplay:true,
    autoplayHoverPause:true,
    autoplaySpeed:1000,
    smartSpeed:1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
    
});

    document.addEventListener("DOMContentLoaded", function(){
        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                document.getElementById('header').classList.add('shadow-sm');
                // add padding top to show content behind navbar
                navbar_height = document.querySelector('.header').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
            } else {
                document.getElementById('header').classList.remove('shadow-sm');
                 // remove padding top from body
                document.body.style.paddingTop = '0';
            } 
        });
    });

    var elem = document.getElementById('clock');
    var points = elem.getAttribute('date');
      function animation(span) {
          span.className = "turn";
          setTimeout(function () {
              span.className = ""
          }, 700);
      }
      function Countdown() {    
          setInterval(function () {  
             var hari    = document.getElementById("days");
             var jam     = document.getElementById("hours");
             var menit   = document.getElementById("minutes");
             var detik   = document.getElementById("seconds");

             //Here You Can change date for ending   
             var deadline    = new Date(points + ' 23:59:59');

             var waktu       = new Date();
             var distance    = deadline - waktu;                
             var days    = Math.floor((distance / (1000*60*60*24)));
             var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
             var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
             var seconds = Math.floor((distance % (1000 * 60)) / 1000);                
             if (days < 10){ days = '0' + days; }
             if (hours < 10){  hours = '0' + hours;}
             if (minutes < 10){ minutes = '0' + minutes;}
             if (seconds < 10) { seconds = '0' + seconds;}
             hari.innerHTML    = days;
             jam.innerHTML     = hours;
             menit.innerHTML   = minutes;
             detik.innerHTML   = seconds;
             //animation
             animation(detik);
             if (seconds == 0) animation(menit);
             if (minutes == 0) animation(jam);
             if (hours == 0) animation(hari);  
          }, 1000);
      }  
      Countdown();

    baguetteBox.run('.tz-gallery');

    
