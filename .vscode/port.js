

$(document).ready(function() {
  
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name="' + this.hash.slice(1) + '"]');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1300); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});


function startCounting(elementId, start = 1, end = 1000, interval = 1000) {
  let current = start;

  const counterElement = document.getElementById(elementId);

  const intervalId = setInterval(() => {
      counterElement.textContent = current + " +Hours";
      if (current >= end) {
          clearInterval(intervalId);
      } else {
          current++;
      }
  }, interval);
}

// Call the function for the four counters
startCounting('counter1', 1, 500, 50);
startCounting('counter2', 1, 700, 50);
startCounting('counter3', 1, 700, 50);


