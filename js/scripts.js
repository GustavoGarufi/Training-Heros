var pContainerHeight = $('.heroback').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.headline').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.splash').css({
      'transform' : 'translate(0px, -'+ wScroll /20 +'%)'
    });
  }
});
