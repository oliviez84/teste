



 setTimeout('animate()',000)

function animate(){
     
    flamant(),
    nuage1(),
    nuage2()
   

}
 function flamant(){
    var longimg = $('.flamant').width()
     var long = $( ".cadre" ).width();
    var haut = $( ".cadre" ).height()
     var deptop = haut/4
    var miltop = haut/6

      $('.flamant').animate({right:-longimg,top:deptop},0)
      .animate({
         
         right:long - long/2,
         top: deptop + miltop, 
         },3000).animate({

        right:long+longimg,
        top: deptop

         },2000)
   
     setTimeout('flamant()',4000)
  }

 function nuage1(){
     var $nuage1taille = $('.nuage1').width()
     var $nuage1long = $( ".cadre" ).width()
     var $nuage1haut = $('.cadre').height()
    
    var $leftnuage1 = $nuage1long
    var $topnuage1 = $nuage1haut / 7
   

      $('.nuage1').animate({left:-$nuage1taille,top:$topnuage1},0).animate({left: $leftnuage1,top: $topnuage1},20000)
   
     setTimeout('nuage1()',25000)
 }
 function nuage2(){

    var $nuage2taille = $('.nuage2').width()
    var $nuage2long = $( ".cadre" ).width()
    var $nuage2haut = $('.cadre').height()
   
   var $leftnuage2 = $nuage2long
   var $topnuage2 = $nuage2haut / 2.5

      $('.nuage2').animate({left:-$nuage2taille,top:$topnuage2},0).animate({left: $leftnuage2,top: $topnuage2},10000,"linear")
   
     setTimeout('nuage2()',20000)
 
 }

