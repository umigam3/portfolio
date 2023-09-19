function isElementInViewport (el) {
  
  var rect = el.getBoundingClientRect();
  var vHeight = window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.bottom >= 0 && // Element's bottom is at or above the top of the viewport
    rect.top <= vHeight / 4 // Element's top is within the top half of the viewport
  );
}

export function elementHandler() {
  
  var visible = 0;
  var ids = ['about','experience','education'];
  ids.forEach(function(id){
    if(isElementInViewport($('#'+id)[0])) {
        visible = id;
    }
  })
  
  if (visible) {
    $('.index-element').removeClass('selected');
    $('#' + visible + '_').addClass('selected');
  }
};

export function animateCursor() {

  const cursor = document.querySelector('.bg__gradient');

  let mouseX = 0;
  let mouseY = 0;
  
  let cursorX = 0;
  let cursorY = 0;
  
  let speed = 0.5;
  
  function animate() {
      let distX = mouseX - cursorX;
      let distY = mouseY - cursorY;
  
      cursorX = cursorX + (distX * speed);
      cursorY = cursorY + (distY * speed);
  
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
  
      requestAnimationFrame(animate);
  }
  
  animate();

  document.addEventListener('mousemove', (event) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
  })
}

export function cardTilt() {

  "use strict";

  $(".experience-card").tilt({
    maxTilt: 5,
    perspective: 1500,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 500,
    glare: false,
    maxGlare: 0.1,
    scale: 1.01
  });

  $(".education-card").tilt({
    maxTilt: 5,
    perspective: 1500,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 500,
    glare: false,
    maxGlare: 0.1,
    scale: 1.01
  });

};
