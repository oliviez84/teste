$(document).ready(function(){

   

   
   
    $(window).scroll(function(e){
        var scrolltop = $(this).scrollTop()

       if(scrolltop > 99 ){
           $('.menu').addClass('menutop')
          
       }else {
        $('.menu').removeClass('menutop')
   
       }
    });
    $(window).scroll(function(e){
        var scrolltop = $(this).scrollTop()
        
       if(scrolltop >3006 ){
           $('.simon').addClass('rotate')
          
       }else {
        $('.simon').removeClass('rotate')
   
       }
    });
    $(window).scroll(function(e){
        var scrolltop = $(this).scrollTop()
        
       if(scrolltop >850){
           $('.simon1').addClass('rotate2')
          
       }else {
        $('.simon1').removeClass('rotate2')
   
       }
    });
    $(window).scroll(function(e){
        var scrolltop = $(this).scrollTop()
        
       if(scrolltop >1900){
           $('.simon2').addClass('rotate3')
          
       }else {
        $('.simon2').removeClass('rotate3')
   
       }
    });

 


    $('.menu a').click(function(e){
        // e.preventDefault() 
        var $link=$(this).attr('href')
        pos = $($link).offset()
        var scol= pos.top -20
    
         $('body,html').animate({scrollTop:scol},600);
       
       
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