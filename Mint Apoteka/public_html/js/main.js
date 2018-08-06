$(document).ready(function(){


    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 50) {
                var animacija = $(this).attr('data-animation');
                $(this).addClass(animacija);
            }
        });
    }

    animation();

    $(window).scroll(function () {
        animation();
    });

































// FULLWIDTH SLIDER
if($('.lead-slider').length > 0){
    $('.lead-slider').bxSlider({
        mode:'horizontal',
        pager:false,
        auto:true,
        autoHover:true
    });
}






// ASIDE TOGGLE
    $('.meni').on('click', 'a', function(e){
        e.preventDefault();

        if(!$(this).hasClass('active')){ 
            $(this).parent().siblings().children('a').removeClass('active');
            $(this).toggleClass('active');
            
          }

        $(this).next('.submenu').slideToggle();
        
    });
    
    $('.submenu').on('click', 'a',  function(){


        if(!$(this).hasClass('sub-active')){ 
            // $(this).closest('li').siblings().find('a').removeClass('sub-active');
            $(this).closest('ul').parent().siblings('li').find('li').children('a').removeClass('sub-active');
            $(this).toggleClass('sub-active');
          }
    });











// OWL SLIDER
if($('.owl-carousel').length > 0){
    
    $('.team-slider').owlCarousel({
        margin: 10,
        navText:['<span class=" fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
        responsive:{
            0:{
                items:2,
                nav:false,
                dots:true
            },
            576:{
                items:2
            },
            768:{
                items:3,
                nav:true,
                dots:false
            }
                    
        }
    });

    $('.brand-slider').owlCarousel({
        items: 6,
        dots: false,
        margin: 10 
    });
}



$('.show-menu').click(function(){
    $('.asside-menu').toggleClass('is-open');
});






});