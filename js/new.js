$(function(){
    startBtn1();
    startBtn2();
    closeBtn2();

function startBtn1(){
    $(".startBtn1").on("click", function(){
        $(".pricing_popup, .plan1").show();
        $(".plan2").hide();
    
    });
    }    

    function startBtn2(){
        $(".startBtn2").on("click", function(){
            $(".pricing_popup, .plan2").show();
            $(".plan1").hide();
        })
        
    }
    function closeBtn2(){
        $(".pop_up_close").on("click", function(){
            $(".pricing_popup").css("display","none");
        })
        
    }

    
})//endfunction

