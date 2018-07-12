console.log('JavaScript is enabled!');

var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  var scroll_pos = window.scrollY;//this is setting the window.scrollY (system-set function) to your know variable so you can use it [THIS WILL BE GLOBAL FOR THE WHOLE FUNCTION]
  if(scroll_pos > 250 && scroll_pos < 800){ //this is taking the scroll_pos annd check to see if its value is greater than 0 AND less than 800
    var topSection = document.getElementById('mission-section'); //this is setting the secton that I want to effect [THIS WILL ONE BE USEFUL FOR ONLY THIS IF STATEMENT BECAUSE IT IS ONLY TARGETING THAT SPECIFIC ELEMENT]
    topSection.classList.remove('hidden');
    topSection.classList.add('reveal');
  }
}

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {
      window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});
