(function() {
    
    // ======== SCROLL ANIMATION ======== //
    // Recursive scroll function
    const scrollTo = (element, to, duration) => {
      if (duration <= 0) {return;}
      var difference = to - element.scrollTop;
      var perTick = difference / duration * 10;
      
      setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) {return;}
        scrollTo(element, to, duration - 10);
      }, 10);
    }
    
    // Save DOM elements that can be scrolled to
    let targetElements = {};
    (function() {
      const myWork = document.getElementById('my-work');
      const contact = document.getElementById('contact');
      targetElements = {
        'my-work': myWork,
        contact: contact
      };
    })();
    
    
    // ======== NAVIGATION ANIMATION ======== //
    // Select links with scroll action
    const scrollElements = document.getElementsByClassName('scroll');
    
    // Add event listener to navigation links with scroll action
    Array.prototype.forEach.call(scrollElements, (scrollElement) => {
      scrollElement.addEventListener('click', (event) => {
        event.preventDefault();
        const targetElement = targetElements[(scrollElement.getAttribute('href').slice(1))];
        scrollTo(document.body, targetElement.offsetTop, 400);
      });
    });
   
    
// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});
  
  }());