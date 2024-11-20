function userScroll() {
    //get navbar from document
    const navbar = document.querySelector('.navbar');

    //get 'to-top button
    const toTopBtn = document.querySelector('#to-top');
  
    //add scroll event and code for what to do
    window.addEventListener('scroll', () => {
    //   if user is scrolling vertically > half way
        if (window.scrollY > 50) {
        //add navbar-sticky class (from styles.scss) to navbar
        navbar.classList.add('navbar-sticky');
        //also show 'to top' button 
        toTopBtn.classList.add('show');
      } else {
    //otherwise, remove navbar-sticky, and hide 'to top' btn
        navbar.classList.remove('navbar-sticky');
        toTopBtn.classList.remove('show');
      }
    });
  }
  
  //scroll to top of body element
  //set body's scrollTop element to 0
  function scrollToTop() {
    document.body.scrollTop = 0;
    //for safari, edge & IE
    document.documentElement.scrollTop = 0;
  }
  
  //function to increment stats 
  function incrementStats() {
    //get all .counter classes (counters) & put them in array
    const counters = document.querySelectorAll('.counter');
  
    //repeat for each .counter class element in array
    counters.forEach((counter) => {
        //set element's inner text to 0
        counter.innerText = 0;
  
        //create an arrow function
        const updateCounter = () => {
        
        //for current .counter class element (from array),
        //get the 'data-target' attribute (max value)' 
        //add a + sign to make it a number (from string)
        const target = +counter.getAttribute('data-target');
        
        //for current .counter class element (from array),
        //get the innerText (current value) 
        //add a + sign to make it a number (from string)
        const c = +counter.innerText;
  
        //set the increment jump of the target (max) attribute
        //higher divider value means takes longer (slow increment)
        const increment = target / 500;
  
        //if current value is less than target (max value)
        if (c < target) {
          //increment it by jump, rounded with Math.ceil
          counter.innerText = Math.ceil(c + increment);
          
          //set timeout of 1 ms, and keep calling updateCounter
          //function recursively, untill it reaches max value
          setTimeout(updateCounter, 1);
        } else {//increment reached max value
          //set it to max value
          counter.innerText = target;
        }
      };
  
      //call this function once, for the first time
      updateCounter();
    });
  }
  
  // Event Listeners
  //run userScroll function after dom content is loaded
  document.addEventListener('DOMContentLoaded', userScroll);
  
   //run incrementStats function after dom content is loaded
  document.addEventListener('DOMContentLoaded', incrementStats);
  
   //listen to click event on element with id #to-top 
   //(the 'to top' butto), and when clicked, run 
   //scrollToTop function
  document.querySelector('#to-top').addEventListener(
        'click', scrollToTop);
  