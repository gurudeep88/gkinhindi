$(document).ready(function () {
$(window).on('scroll',funcion(){
  if ($(window).scrollTop()) {
    $('header').addClass('white');
  }
  else {
    $('header').removeClass('white');
  }
})

$('#slider-area').owlCarousel({
  loop:true,
  nav:true,
  dots:true,
  autoplay:true,
  pause: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
}),

/*-------------slick-slider-------------*/



var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex,colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor="";
    node.style.color="";
  });
  tabButtons[panelIndex].style.backgroundColor=colorCode;
  tabButtons[panelIndex].style.color="white";
  tabPanels.forEach(function (node) {
    node.style.display="none";
  });
  tabPanels[panelIndex].style.display="block";
  tabPanels[panelIndex].style.backgroundColor="colorCode";
}
})
/*---------x----slick-slider------x-------*/
