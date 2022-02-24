$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()>80) {
            $('.navbar').addClass('solid bg-light');
        }else{
            $('.navbar').addClass('solid bg-light');
        }
       
    });

    


    
    $(' nav-link,.nav-items').on('click', function(e) {
        if ( this.hash !== "" ) {
            e.preventDefault();
            var anchor = this.hash;

            $('html, body').animate({
                scrollTop: $(anchor).offset().top
            }, 800, function() {
                window.location.hash = anchor;
            });
        }
    });
});
