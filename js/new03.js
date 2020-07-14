


$(".upBtn").hide();
$(".showBtn").show();
var isplay = true;

function toggleThumb(){


    if(!isplay){
        $(".foot_thumb_wrap ul").slideDown()
        $(".upBtn").hide();
        $(".showBtn").show();
    }else{
        $(".foot_thumb_wrap ul").slideUp()
        $(".upBtn").show();
        $(".showBtn").hide();
    }


    isplay = !isplay;
    
}

