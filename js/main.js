

$(window).scroll(function(){
  $('.desktop-menu').toggleClass('scrolled',$(this).scrollTop()>50);
})
$(window).scroll(function(){
  $('.white-color').toggleClass('scrolled2',$(this).scrollTop()>50);
})


// scrolling menu
$('.menu a[href^="#"]').click(function(e) {
  e.preventDefault();
  var target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top -100
  },500);
});
// scrolling menu
$('.nav-item a[href^="#"]').click(function(e) {
  e.preventDefault();
  var target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top -100
  },500);
});

// scrolling menu
$('.gobal-btn a[href^="#"]').click(function(e) {
  e.preventDefault();
  var target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top -100
  },500);
});
// scrolling menu
$('.hero-btn a[href^="#"]').click(function(e) {
  e.preventDefault();
  var target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top -100
  },500);
});




/* Faq Questions =============================================================*/ 
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    
     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
       currentlyActiveAccordionItemHeader.classList.toggle("active");
       currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
     }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();






// animation

  new WOW().init();