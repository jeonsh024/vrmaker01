$(function(){
	init();

//$('#top').hide();
        $("#top").on("click", function() {
            $("html, body").animate({scrollTop : 0}, 300);
            return false;
        });

        var scrollTop = $("#top");
        scrollTop.css("opacity","0");

        $(window).scroll(function() {
        
            var topPos = $(this).scrollTop();

            if (topPos > 100) {
                $(scrollTop).css("opacity", "1");
            } else {
                $(scrollTop).css("opacity", "0");
            }
        }); // scroll END


        var display = true;
        var nav = $('#nav_m');
        nav.hide();
        var cnt = 0;
        var isplay = false;
        // $('#nav_m').hide();
        $('#menu_btn').on("click",function(){
            $(this).toggleClass('open');
            if(!isplay){
                nav.fadeIn()
            }else{
                nav.fadeOut();
            }
            isplay = !isplay
        });



})//endfunction

