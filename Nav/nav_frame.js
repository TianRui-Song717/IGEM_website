//nav 部分下滑设置透明度
var nav_change_color_height = 10;//导航栏变色
$(function(){
    $(window).scroll(function(){
        curTop=$(window).scrollTop();
        video_height = $(".video_container").height();
        //导航部分的响应
        if(curTop<nav_change_color_height){
            $(".navbar").removeClass("nav_color_change");
        }else{
            $(".navbar").addClass("nav_color_change");
        }
    })
})

//nav二级菜单
$(function(){
$(".nav_item").click(function(){
    if($(this).attr("id") == "team_button"){
        $("#team_button").children().eq(1).toggleClass("show_dropdown");
        $(this).siblings().children().removeClass("show_dropdown");
        $("#part_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        $("#project_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        $("#hp_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        if($("#team_button").children().eq(0).attr("class") == "glyphicon glyphicon-chevron-up"){
            $("#team_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down")
        }else{
            $("#team_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-up");
        }
    }else if($(this).attr("id") == "project_button") {
        $("#project_button").children().eq(1).toggleClass("show_dropdown");//二级菜单
        $("#team_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        $("#part_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        $("#hp_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        if($("#project_button").children().eq(0).attr("class") == "glyphicon glyphicon-chevron-down"){
          $("#project_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-up");//改为向上箭头
        }else{
          $("#project_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        }
        $(this).siblings().children().removeClass("show_dropdown");//收回其它二级菜单
    }else if($(this).attr("id") == "part_button") {
        $("#part_button").children().eq(1).toggleClass("show_dropdown");//二级菜单
        $("#team_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        $("#project_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        $("#hp_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        if($("#part_button").children().eq(0).attr("class") == "glyphicon glyphicon-chevron-down"){
          $("#part_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-up");//改为向上箭头
        }else{
          $("#part_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        }
        $(this).siblings().children().removeClass("show_dropdown");//收回其它二级菜单
    }else if($(this).attr("id") == "hp_button") {
        $("#hp_button").children().eq(1).toggleClass("show_dropdown");//二级菜单
        $("#team_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        $("#project_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        $("#part_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        if($("#hp_button").children().eq(0).attr("class") == "glyphicon glyphicon-chevron-down"){
          $("#hp_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-up");//改为向上箭头
        }else{
          $("#hp_button").children().eq(0).attr("class","glyphicon glyphicon-chevron-down");
        }
        $(this).siblings().children().removeClass("show_dropdown");//收回其它二级菜单
    }
})
})

// 隐藏式菜单按钮
$(function(){
$(".navbar-button").click(function(){
    $(".navbar_nav").toggleClass("show_hide_nav");
})
})
