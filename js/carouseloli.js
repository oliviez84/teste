$(document).ready(function(){

 
    var $count = 0
    
    var $nbimage = $('#slider img').length
    var $taille = $nbimage * 100 + "%"
    $('#slider figure').css('width',$taille)
    
    console.log($nbimage)
 

    $("#suivant").click(function (){
       $count++
       if($count > $nbimage -1){
           $count= $nbimage - 1
           $(this).addClass('noactive')
        return 
       }else {
           $count = $count
           $('#precedent').removeClass('noactive')
       }
       decalage = $count * "-100"+"%"
        $("#slider figure").animate({"marginLeft": decalage},300);
       
    }) 

    $("#precedent").click(function (){
       $count--
       if($count < 0){
           $count= 0
           $(this).addClass('noactive')
        return 
       }else {
           $count = $count
           $('#suivant').removeClass('noactive')
       }
       decalage = $count * "-100"+"%"
        $("#slider figure").animate({"marginLeft": decalage},300);
       
    }) 
   
    
})