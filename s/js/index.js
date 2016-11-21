/**
 * Created by Longder on 2016/11/21.
 */
$(function(){
    $("#menu_arrow").click(function(){
        if($("#menu_arrow").hasClass("menu_arrow_left")){
            $("#menu_arrow").animate({left:"44px"},290);
            $("#menu_arrow").removeClass("menu_arrow_left");
            $("#menu_arrow").addClass("menu_arrow_right");
        }else if($("#menu_arrow").hasClass("menu_arrow_right")){
            $("#menu_arrow").animate({left:"223px"},290);
            $("#menu_arrow").removeClass("menu_arrow_right");
            $("#menu_arrow").addClass("menu_arrow_left");
        }
    });
    //DatetimePicker初始化
    $("#calendar").datepicker("show");
});
