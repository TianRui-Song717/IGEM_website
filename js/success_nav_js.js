//nav 部分下滑设置透明度
var nav_change_color_height = 10;//导航栏变色
var road_map_circle_first_start = 100;//导航栏变色
var curTop = 0;
$(function(){
    $(window).scroll(function(){
        curTop=$(window).scrollTop();
        //导航部分的响应
        if(curTop<nav_change_color_height){
            $(".navbar").removeClass("nav_color_change");
        }else{
            $(".navbar").addClass("nav_color_change");
        }
        //RoadMap的滚动
        if(curTop > road_map_circle_first_start + 100){
            $(".circle").css({"stroke-dashoffset":"0"});
        }
        //增加其他部分
    })
})

//nav二级菜单
$(function(){
$(".nav_item").click(function(){
    if($(this).attr("id") == "team_button"){
        $("#team_button").children().eq(1).toggleClass("show_dropdown");
        $("#team_butto_tit").toggleClass("show_dropdown_color");
    }else if($(this).attr("id") == "project_button") {
        $("#project_button").children().eq(1).toggleClass("show_dropdown");
        $("#project_button_tit").toggleClass("show_dropdown_color");
    }
})
})


// 隐藏式菜单按钮
$(function(){
$(".navbar-button").click(function(){
    $(".navbar_nav").toggleClass("show_hide_nav");
})
})
