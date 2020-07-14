
function studioPop() {

$(".popup").hide();
    $(".studio_view").click(function (e) {
        e.preventDefault();
        $("iframe").attr("src", $(this).attr('href'));
        $(".popup").fadeIn('slow');
    });

    $(".close").click(function () {
        $(this).parent().fadeOut("slow");
    });

}//modal

studioPop();