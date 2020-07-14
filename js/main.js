$(function(){

	init();
	fade();
    uploade_file();
    registerPop();
    hospot();
    closeBtn();
    sideControl();
    popFolderClose();


});//endfunction


function init() {


	$('.slideinleft').css({left:'-300px', opacity:0});
	$('.slideinright').css({right:'-300px', opacity:0});

    $(window).scroll( function(){
        $('.slideinleft').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'left':'0px', opacity: 1},1000);
            }
            
        }); 

        $('.slideinright').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'right':'0px', opacity: 1},1000);
            }
            
        }); 
    });

}//init
 



function fade() {


	$('article .sample_img').css({opacity:0});
	$('article .sample_txt').css({opacity:0});

	$(window).scroll( function(){
        $('article .sample_img').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({ opacity: 1},1000);
            }
            
        }); 
        
        $('article .sample_txt').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({ opacity: 1},1000);
            }
            
        }); 
    });


} //fade 

function uploade_file(){
    var isplay = true;

    $("input[name = checkbox1]").on("click", function(){
        if(isplay){
            $(".project_right > div .upload_file").css({ backgroundColor : "#ff0041 !important", color: "#fff" , border : "0"});
        }else{
            $(".project_right > div .upload_file").css({ backgroundColor : "#fff" , color: "#000", border :"solid 1px #e2e2e2"});
        }
        isplay = !isplay;
        
    });

    $("input[name = checkbox2]").on("click", function(){
        if(!isplay){
            $(" .project_option .logo_file").css({ backgroundColor : "#ff0041 !important", color: "#fff" , border : "0"});
        }else{
            $(" .project_option .logo_file").css({ backgroundColor : "#fff" , color: "#000", border :"solid 1px #e2e2e2"});
        }
        isplay = !isplay;
        
    });

   
} //switch


function registerPop(){

    $(".signupbtn").on("click", function(){

        $(".signupbtn .signupBtn").hide();
        $(".signupbtn .loadBtn").show();

        setTimeout(function(){
                $(".complete_wrap").show();
                $(".signupbtn .signupBtn").show();
                $(".signupbtn .loadBtn").css("display","none");
        }, 2000);

    });

    // $(".signupbtn").on("click", function(){
    //     $(".complete_wrap").show();
    // });

    $(".btn_wrap .save_btn").on("click", function(){

        $(".save_btn .saveBtn").hide();
        $(".save_btn .loadBtn").show();

        setTimeout(function(){
                $(".save_btn .saveBtn").show();
                $(".save_btn .loadBtn").css("display","none");
        }, 2000);

    });

  

    $(".folder_file .item").click(function (e) {
        var cb = $(this).find(":checkbox")[0];
        if (e.target != cb) cb.checked = !cb.checked;
        $(this).toggleClass("selected", cb.checked);
    });

}

function delete_event(){
    if(confirm("Are you sure to delete the project?") == true){
        document.form.submit();
    }else{
        return;
    }
}

function hospot(){
    var num = 0;
    $('#modal_bg').hide();
    $('.project_hotspot').hide();

    $('.side_controls ul li').on("click", function(c){

        num = $(this).index();
        $('.project_hotspot').eq(num).show();
        $('#modal_bg').show();

        $('li.on').removeClass('on');
        $(this).addClass('on'); 

        return false;
    });
} //hotspot popup

function closeBtn(){
    $(".close_btn").on("click", function(){
        $(".project_hotspot").hide();
        $('#modal_bg').hide();
        $("#project_floor_hotspot .floor_modal_content").css("display","none");

        $('.side_controls ul li').hasClass('on')
        $('.side_controls ul li').removeClass('on');

        return false;
    })
} //hotspot 닫기버튼


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

function addFolder(){
    $(".creat_new_folder").css("display","block");
} //addFolder

function deleteFolder(){
    if(confirm("Do you want to delete this file?") == true){
        document.form.submit();
    }else{
        return;
    }
} //deleteFolder

function popFolderClose(){
    $(".closeBtn").on("click", function(){
        $(".creat_new_folder").css("display","none");
        document.getElementById("new_folder").reset();
    })
}

function addTour(){
    if(confirm("Added successfully") == true){
        document.form.submit();
    }else{
        return;
    }
}

function addTour_deleteBtn(){
    if(confirm("Do you want to delete this scene?") == true){
        document.form.submit();
    }else{
        return;
    }
}



function control_image(){

alert('roject creation succeed');


}

function CheckSpaces() { 

    alert('Project creation succeed');
} 

function libraryItemDelete(){
    
    $('.deleteBtn').on("click", function(){
        alert('Do you want to delete this file?');
    })
}
























































