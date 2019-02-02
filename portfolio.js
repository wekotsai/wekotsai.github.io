(function() {
  
    // ======== HAMBURGER MENU ANIMATION ======== //
    // Find the navigation hamburger button
    const hamburgerElement = document.querySelectorAll('input[type=checkbox]')[0];
  
    // Find the DOM element that will get dark
    const mainElement = document.getElementsByTagName('main')[0];
  
    // Navigation menu logic for click or touch events
    ['click', 'touchstart'].forEach(predefinedEvent => {
      document.body.addEventListener(predefinedEvent, (event) => {
        
        if (hamburgerElement.checked) {
          mainElement.className = 'dark';
          if (event.target.type !== 'checkbox') {
            hamburgerElement.checked = false;
            mainElement.className = '';
          }
        } else if (event.target.type === 'checkbox') {
          mainElement.className = '';       
        }
  
      }, false);
    });
    
    
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
   
    
    // ======== BACK TO TOP ANIMATION ======== //
    const amountScrolled = 2500;
    const backToTopButton = document.getElementById('back-to-top');
    
    // Show or hide 'back to top' arrow button
    window.addEventListener('scroll', (event) => {
      if (window.scrollY > amountScrolled) {
        backToTopButton.style.opacity = '0.6';
      } else {
        backToTopButton.style.opacity = '0';
      }
    })
  
    // Scroll to target
    backToTopButton.addEventListener('click', (event) => {
      event.preventDefault();
      scrollTo(document.body, targetElements['my-work'].offsetTop, 400);
    });
  
  }());