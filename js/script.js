function isElementInViewport (el) {
  var rect = el.getBoundingClientRect();
  var vHeight = window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.bottom >= 0 && // Element's bottom is at or above the top of the viewport
    rect.top <= vHeight / 4 // Element's top is within the top half of the viewport
  );
}

function handler() {
  var visible = 0;
  var ids = ['about','experience','education','projects'];
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

window.onload = function() {
  const right = document.getElementsByClassName('right-section');
  right[0].addEventListener('scroll', handler);
}
