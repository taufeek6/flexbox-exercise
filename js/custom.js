$(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
       $('body').addClass('fixed');
    } else {
       $('body').removeClass('fixed');
    }
});