$(function(){
  $(window).scroll(function(){
    var curTop=$(window).scrollTop();
    var nav_change_color_height = 10;//导航栏变色
    var general_side_nav = $(".general_background_image").height();
    //导航部分的响应
    if(curTop<nav_change_color_height){
        $(".navbar-default").css("background-color","rgba(48,48,48,0.3)");//改变背景色
        $("#slim_logo").attr("src","logo_pic.png");
    }else{
        $(".navbar-default").css("background-color","rgba(40,40,40,1)");
        $("#slim_logo").attr("src","logo_pic.png");
    }
    //滚动屏幕时，把导航选项折叠起来
    $("#navbar").collapse('hide');
    //侧边导航的固定
    if (curTop > general_side_nav){
      $(".left_nav").addClass("left_nav_after");
    }else{
      $(".left_nav").removeClass("left_nav_after");
    }
    //侧边导航颜色改变
    var element_1 = $("#general_info_ele_1").offset().top;
    var element_2 = $("#general_info_ele_2").offset().top;
    var element_3 = $("#general_info_ele_3").offset().top;
    var element_4 = $("#general_info_ele_4").offset().top;
    if(curTop >= (element_1 - 10) && curTop < (element_2 - 10)){
      $("#sidenav_1").addClass("general_side_nav_color");
    }else{
      $("#sidenav_1").removeClass("general_side_nav_color");
    }
    if(curTop >= (element_2 - 10) && curTop < (element_3 - 10)){
      $("#sidenav_2").addClass("general_side_nav_color");
    }else{
      $("#sidenav_2").removeClass("general_side_nav_color");
    }
    if(curTop >= (element_3 - 10) && curTop < (element_4 - 200)){
      $("#sidenav_3").addClass("general_side_nav_color");
    }else{
      $("#sidenav_3").removeClass("general_side_nav_color");
    }
    if(curTop >= (element_4 - 200)){
      $("#sidenav_4").addClass("general_side_nav_color");
    }else{
      $("#sidenav_4").removeClass("general_side_nav_color");
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


//sidenav_锚点点击滚动跳转
$(function(){
  $(".general_sidenav_a").click(function(){
    var element_1 = $("#general_info_ele_1").offset().top;
    var element_2 = $("#general_info_ele_2").offset().top;
    var element_3 = $("#general_info_ele_3").offset().top;
    var element_4 = $("#general_info_ele_4").offset().top;
    // var element_5 = $("#general_info_ele_5").offset().top;
    if($(this).attr("id") == "sidenav_1"){
      $("html,body").animate({scrollTop:element_1},1000);
    }else if($(this).attr("id") == "sidenav_2"){
      $("html,body").animate({scrollTop:element_2},1000);
    }else if($(this).attr("id") == "sidenav_3"){
      $("html,body").animate({scrollTop:element_3},1000);
    }else if($(this).attr("id") == "sidenav_4"){
      $("html,body").animate({scrollTop:element_4},1000);
    }
    // }else if($(this).attr("id") == "sidenav_5"){
    //   $("html,body").animate({scrollTop:element_5-100},600);
    // }
  })
})

