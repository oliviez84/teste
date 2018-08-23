
$(document).ready(function(){

    box.init()
   
        $('.menu a').click(function(e){
            e.preventDefault() 
            var $link=$(this).attr('href')
            pos = $($link).offset()
            var scol= pos.top - 50
        
             $('body,html').animate({scrollTop:scol},600)
           
    })

    })
 



 box = {

init: function(){
  
  
    $(".zoom img").click(function(){
    box.lien = ($(this).attr('src'));

     box.load()

  
  }); 
$('#overlay').click(box.close)


},

close: function(){
    $('#overlay').slideUp(function(){
        $('#overlay img').remove()    
        $('#photo span').removeClass('active')
    })
},

load: function(){
    var $taille = $(window).width()
    pos = $('#stop').offset()
    var scol= pos.top -100
    if($taille > 800){
     $('body,html').animate({scrollTop:scol},600)
     $('#overlay').html('<span><img src='+box.lien+'></span>').slideDown()  
}else {
    return          
}
}

 }

