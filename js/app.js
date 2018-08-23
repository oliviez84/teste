
$(document).ready(function(){

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

