$(document).ready(function () {
    $(".message").click(function(){
        $(".ichi").fadeIn()
    });
    $(".sss").click(function(){
        $(".ichi").fadeOut()
    });
    

    

});

$('.col-12').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspit:1000
  });
