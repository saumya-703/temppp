window.addEventListener("scroll", function(){
    var nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky" , window.scrollY)
   })
var preloader= document.getElementById('loading');
{
    function load(){
        preloader.style.display= 'none';
    }
}
document.addEventListener('DOMContentLoaded', function(event) {

    for(let i = 0;i<document.getElementsByClassName('more').length;i++){

        document.getElementsByClassName('more')[i].style.visibility = 'visible';
        document.getElementsByClassName('less')[i].style.visibility = 'visible';

       document.getElementsByClassName('more')[i].onclick = function() {
        document.getElementsByClassName('card')[i].classList.toggle('do-flip');
        };

        document.getElementsByClassName('less')[i].onclick = function() {
        document.getElementsByClassName('card')[i].classList.toggle('do-flip');
        };
    };

  }); 
  window.onscroll = function() {
      myFunction()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  var landing = document.querySelector(".landing");

fetch("./home.json")
    .then((res)=>{return res.json()})
    .then((data)=>{
        data.map((item)=>{
            landing.innerHTML +=  '<h4>'+item.h4+'</h4><h1>'+item.h1+'</h1><h3>'+item.h3+'</h3>';
        })
    })


var Damian = document.querySelector(".Damian");
fetch("./photo.json")
    .then((res)=>{return res.json()})
    .then((data)=>{
        data.map((item)=>{
            Damian.innerHTML +=  '<img class="Damian" src="image/Damain.png" alt="" srcset="">';
        })
    })



var about1 = document.querySelector(".about1");

fetch("./about.json")
    .then((res)=>{return res.json()})
    .then((data)=>{
        data.map((item)=>{
            about1.innerHTML += '<div class="h"data-aos="fade-right"><h4>'+item.h4+'</h4><h1>'+item.h1+'</h1></div><div class="c" data-aos="fade-right"><p class="para1">'+item.para1+'</p><p class="para2">'+item.para2+'</p></div>';
        })
    })


var icons= document.querySelector(".icons");

    fetch("./links.json")
        .then((res)=>{return res.json()})
        .then((data)=>{
            data.map((item)=>{
                icons.innerHTML += '<a href='+item.href+'><li class='+item.class+'><img src='+item.src+' alt="" srcset=""></li></a>';
            })
        })

var timeline= document.querySelector(".timelineul");

        fetch("./experience.json")
            .then((res)=>{return res.json()})
            .then((data)=>{
                data.map((item)=>{
                    timeline.innerHTML += '<li><h6>'+item.h6+'</h6><h2>'+item.h2+'</h2><p>'+item.p+'</p></li>';
                })
})



var card= document.querySelector(".cards-container");

        fetch("./projects.json")
            .then((res)=>{return res.json()})
            .then((data)=>{
                data.map((item)=>{
                    card.innerHTML += '<div class="card"><div class="card-front" data-aos="zoom-in-up"><p>'+item.p2+'</p><h2>'+item.h+'</h2><button class="more">View More <span>&#129062;</span></button></div><div class="card-back"><p>'+item.p22+'</p><h2>'+item.h22+'</h2><p class="content">'+item.p222+'</p><button class="less">See Less<span>&#129062;</span></button> </div>';
                })
})
