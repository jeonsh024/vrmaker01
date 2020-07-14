function sideControl(){

    $(".map_pj_Btn").on("click", function(){

        $(".project_step_3 .Project_bg").animate({})
        $(".control_contents").animate({width:"450px"})
        $(".vr_project_map").show();
        $(".close_control_btn, .control_contents").show();
    });

    $(".info_pj_Btn").on("click", function(){

        $(".project_step_3 .Project_bg").animate({})
        $(".control_contents").animate({width:"450px"})
        $(".vr_project_info").show();
        $(".close_control_btn, .control_contents").show();
    });

    $(".qrcode_pj_Btn").on("click", function(){

        $(".project_step_3 .Project_bg").animate({})
        $(".control_contents").animate({width:"450px"})
        $(".vr_project_qrcode").show();
        $(".close_control_btn, .control_contents").show();
    });

    $(".close_control_btn").on("click", function(){

        $(".project_step_3 .Project_bg").animate({})
        $(".control_contents").animate({width:"0"})
        $(".close_control_btn, .control_contents").hide();

        $(".vr_project_map, .vr_project_info, .vr_project_qrcode").hide();
    });

} //preview side_controlBtn