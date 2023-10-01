

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
$('.mobile-iteam a[href^="#"]').click(function(e) {
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

  // New code to add the "active" class to the correct button element
  var buttons = document.querySelectorAll('.tab button');
  for (i = 0; i < buttons.length; i++) {
    if (buttons[i].getAttribute('onclick').includes(cityName)) {
      buttons[i].className += " active";
      break;
    }
  }

  document.getElementById(cityName).style.display = "block";
}



// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




document.querySelectorAll('.menu-item').forEach(function(item, index) {
  item.addEventListener('click', function() {
    var boxes = document.querySelectorAll('.content-box');
    boxes.forEach(box => box.classList.remove('active2'));

    var selectedBox = document.getElementById('box' + (index + 1));
    selectedBox.classList.add('active2');
  });
});

// animation

  new WOW().init();