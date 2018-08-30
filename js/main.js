$(document).ready(function(){

   
      

    $('#rea2 .owl-carousel').owlCarousel({
    
        items:2,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        // margin:30,
        // stagePadding:30,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout:5000,
        loop: true,
        pagination: true,
        dots: true,
        smartSpeed:450,
        nav: false,
       points: false,
       dotsEach: true
    });
    $('#rea .owl-carousel').owlCarousel({
    
        items:2,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        // margin:30,
        // stagePadding:30,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout:5000,
        loop: true,
        pagination: true,
        dots: true,
        smartSpeed:450,
        nav: false,
       points: false,
       dotsEach: true
    });
    $('.owl-carousel').owlCarousel({
    
        items:1,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        // margin:30,
        // stagePadding:30,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout:5000,
        loop: true,
        pagination: true,
        dots: true,
        smartSpeed:450,
        nav: false,
       points: false,
       dotsEach: true
    });

   
   
    $(window).scroll(function(e){
        var scrolltop = $(this).scrollTop()

       if(scrolltop > 99 ){
           $('.menu').addClass('menutop')
           $('.menu2').css('display','flex')
       }else {
        $('.menu').removeClass('menutop')
        $('.menu2').css('display','none')
       }
    })

    $(window).scroll(function(e){
        var scrolltop = $(this).scrollTop()
     
       if(scrolltop > 1600 && scrolltop < 2600){
        $('.compt .colon').addClass('animated slideInRight delay-2s')
    }else {
        $('.compt .colon').removeClass('animated slideInRight delay-2s')
    }
     
    })


    $('.menu a').click(function(e){
        e.preventDefault() 
        var $link=$(this).attr('href')
        pos = $($link).offset()
        var scol= pos.top -80
    
         $('body,html').animate({scrollTop:scol},600)
       
})
$('.menu-icone').click(function(e){
    e.preventDefault();
    $this = $(this);
    if($this.hasClass('is-open')){
    $this.addClass('is-closed').removeClass('is-open');
   }else {
       $this.removeClass('is-closed').addClass('is-open');
   }

    $('#sites span').slideToggle("slow");

})

})