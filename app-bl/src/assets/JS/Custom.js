import $ from 'jquery'

var scrollTop=0
$(window).scroll(function(){
  scrollTop=$(window).scrollTop();

  if(scrollTop>=50){
    $('.nav-bar').addClass('scrolled-nav');
  }else if(scrollTop<50){
    $('.nav-bar').removeClass('scrolled-nav')
  }
})
