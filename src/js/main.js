$( document ).ready( function() {

  // COPY PASTED FROM STACK OVERLFOW - http://stackoverflow.com/questions/10238084/ios-safari-how-to-disable-overscroll-but-allow-scrollable-divs-to-scroll-norma

  // stops page scrolling

  // Uses document because document will be topmost level in bubbling
  $(document).on('touchmove',function(e){
    e.preventDefault();
  });

  var scrolling = false;

  // Uses body because jquery on events are called off of the element they are
  // added to, so bubbling would not work if we used document instead.
  $('body').on('touchstart','.slider',function(e) {

      // Only execute the below code once at a time
      if (!scrolling) {
          scrolling = true;
          if (e.currentTarget.scrollTop === 0) {
            e.currentTarget.scrollTop = 1;
          } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
            e.currentTarget.scrollTop -= 1;
          }
          scrolling = false;
      }
  });

  // Prevents preventDefault from being called on document if it sees a slider div
  $('body').on('touchmove','.slider',function(e) {
    e.stopPropagation();
  });

  // end copy paste

  $( '.smiley, .get-started' ).click( function() {
    $( this ).parent().removeClass( 'active' )
      .addClass( 'done' )
      .next().addClass( 'active' );
  });

  [].forEach.call(document.querySelectorAll('.smile-container'), (function () {
    var sliders = document.querySelectorAll('.slider');
    return function (smileContainerElem, idx) {
      smiler(window, smileContainerElem, sliders[idx]);
    };
  })());

});
