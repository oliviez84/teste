$(document).ready(function(){

   

   
   
    $(window).scroll(function(e){
        var scrolltop = $(this).scrollTop()

       if(scrolltop > 99 ){
           $('.menu').addClass('menutop')
          
       }else {
        $('.menu').removeClass('menutop')
   
       }
    });

 


    $('.menu a').click(function(e){
        // e.preventDefault() 
        var $link=$(this).attr('href')
        pos = $($link).offset()
        var scol= pos.top -80
    
         $('body,html').animate({scrollTop:scol},600);
         console.log('boom')
       
})


$('#burger2 #menu-icone').click(function(e){
 e.preventDefault();

 $this = $(this);
 if($this.hasClass('is-open')){
     $this.addClass('is-closed').removeClass('is-open');  
 }else {
     $this.removeClass('is-closed').addClass('is-open');
 }
   $('.menu-2 ul').toggleClass('open');
 
})

})