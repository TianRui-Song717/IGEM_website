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
    if(curTop >= (element_1 - 10) && curTop < (element_2 - 10)){
      $("#sidenav_1").addClass("general_side_nav_color");
    }else{
      $("#sidenav_1").removeClass("general_side_nav_color");
    }
    if(curTop >= (element_2 - 10) && curTop < (element_3 - 300)){
      $("#sidenav_2").addClass("general_side_nav_color");
    }else{
      $("#sidenav_2").removeClass("general_side_nav_color");
    }
    if(curTop >= (element_3 - 300)){
      $("#sidenav_3").addClass("general_side_nav_color");
    }else{
      $("#sidenav_3").removeClass("general_side_nav_color");
    }
  })
})


//sidenav_锚点点击滚动跳转
$(function(){
  $(".general_sidenav_a").click(function(){
    var element_1 = $("#general_info_ele_1").offset().top;
    var element_2 = $("#general_info_ele_2").offset().top;
    var element_3 = $("#general_info_ele_3").offset().top;
    if($(this).attr("id") == "sidenav_1"){
      $("html,body").animate({scrollTop:element_1},1000);
    }else if($(this).attr("id") == "sidenav_2"){
      $("html,body").animate({scrollTop:element_2},1000);
    }else if($(this).attr("id") == "sidenav_3"){
      $("html,body").animate({scrollTop:element_3},1000);
    }
  })
})
