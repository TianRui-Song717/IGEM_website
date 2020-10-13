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
    var element_5 = $("#general_info_ele_5").offset().top;
    var element_6 = $("#general_info_ele_6").offset().top;
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
    if(curTop >= (element_3 - 10) && curTop < (element_4 - 10)){
      $("#sidenav_3").addClass("general_side_nav_color");
    }else{
      $("#sidenav_3").removeClass("general_side_nav_color");
    }
    if(curTop >= (element_4 - 10) && curTop < (element_5 - 10)){
      $("#sidenav_4").addClass("general_side_nav_color");
    }else{
      $("#sidenav_4").removeClass("general_side_nav_color");
    }
    if(curTop >= (element_5 - 10) && curTop < (element_6 - 450)){
      $("#sidenav_5").addClass("general_side_nav_color");
    }else{
      $("#sidenav_5").removeClass("general_side_nav_color");
    }
    if(curTop >= (element_6 - 450)){
      $("#sidenav_6").addClass("general_side_nav_color");
    }else{
      $("#sidenav_6").removeClass("general_side_nav_color");
    }

    //Implementation first pic
    var half_window = $(window).height()/2;
    var pd_ball = $("#_x31_").offset().top;
    var pd_ball_2 = $("#_x32_").offset().top;
    var pd_ball_3 = $("#_x33_").offset().top;
    var pd_ball_4 = $("#_x34_").offset().top;
    var pd_ball_5 = $("#_x35_").offset().top;

    if(curTop >= (pd_ball - half_window)){
      $("#_x31_").fadeIn(1000);
    }else{
      $("#_x31_").fadeOut(1000);
    }
    if(curTop >= (pd_ball_2 - half_window)){
      $("#_x32_").fadeIn(1000);
    }else{
      $("#_x32_").fadeOut(1000);
    }
    if(curTop >= (pd_ball_3 - half_window)){
      $("#_x33_").fadeIn(1000);
    }else{
      $("#_x33_").fadeOut(1000);
    }
    if(curTop >= (pd_ball_4 - half_window)){
      $("#_x34_").fadeIn(1000);
    }else{
      $("#_x34_").fadeOut(1000);
    }
    if(curTop >= (pd_ball_5 - half_window)){
      $("#_x35_").fadeIn(1000);
    }else{
      $("#_x35_").fadeOut(1000);
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
    var element_5 = $("#general_info_ele_5").offset().top;
    var element_6 = $("#general_info_ele_6").offset().top;
    if($(this).attr("id") == "sidenav_1"){
      $("html,body").animate({scrollTop:element_1},1000);
    }else if($(this).attr("id") == "sidenav_2"){
      $("html,body").animate({scrollTop:element_2},1000);
    }else if($(this).attr("id") == "sidenav_3"){
      $("html,body").animate({scrollTop:element_3},1000);
    }else if($(this).attr("id") == "sidenav_4"){
      $("html,body").animate({scrollTop:element_4},1000);
    }else if($(this).attr("id") == "sidenav_5"){
      $("html,body").animate({scrollTop:element_5},1000);
    }else if($(this).attr("id") == "sidenav_6"){
      $("html,body").animate({scrollTop:element_6},1000);
    }
  })
})
