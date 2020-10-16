//nav 部分下滑设置透明度
var nav_change_color_height = 10;//导航栏变色
$(function(){
    $(window).scroll(function(){
        curTop=$(window).scrollTop();
        video_height = $(".video_container").height();
        //导航部分的响应
        if(curTop<nav_change_color_height){
            $(".navbar-default").css("background-color","rgba(48,48,48,0.3)");//改变背景色
            $("#slim_logo").attr("src","../image/logo_pic.png");
        }else{
            $(".navbar-default").css("background-color","rgba(40,40,40,1)");
            $("#slim_logo").attr("src","../image/logo_pic.png");
        }
        //滚动屏幕时，把导航选项折叠起来
        $("#navbar").collapse('hide')
        //设置各个页面动画开始位置
        var first_page_move = $("#home_page_1").offset().top;
        var second_page_move = $("#home_page_2").offset().top;
        var third_page_move = $("#home_page_3").offset().top;
        var fourth_page_move = $("#home_page_4").offset().top;
        //所有页面文字信息
        var screen_height = window.screen.height;
        var screen_width = window.screen.width;
        var window_width = $(window).width();
        if(curTop <first_page_move - 300){
          $("#home_first_info").fadeOut(1000);
        }else{
          $("#home_first_info").fadeIn(1500);
        }
        if(curTop <second_page_move - 300){
          $("#home_second_info").fadeOut(1000);
        }else{
          $("#home_second_info").fadeIn(1500);
        }
        if(curTop <third_page_move - 300){
          $("#home_third_info").fadeOut(1000);
        }else{
          $("#home_third_info").fadeIn(1500);
        }
        if(curTop <fourth_page_move - 400){
          $("#home_fourth_info").fadeOut(1000);
        }else{
          $("#home_fourth_info").fadeIn(1500);
        }
        //所有页面小人的掉落消失
        if(curTop <second_page_move - 300){
          $("#svg-doc-1 #moving_man").fadeIn(200);
        }else{
          $("#svg-doc-1 #moving_man").fadeOut(1000);
        }
        if(curTop <third_page_move - 100){
          $("#svg-doc-2 #moving_man_2").fadeIn(200);
        }else{
          $("#svg-doc-2 #moving_man_2").fadeOut(1000);
        }
        if(curTop <fourth_page_move - 350){
          $("#svg-doc-3 #moving_man_3").fadeIn(200);
        }else{
          $("#svg-doc-3 #moving_man_3").fadeOut(700);
        }
        if(curTop <fourth_page_move + screen_height){
          $("#svg-doc-4 #moving_man_4").fadeIn(200);
        }else{
          $("#svg-doc-4 #moving_man_4").fadeOut(700);
        }
        //所有页面灯光的消失和出现
        if(curTop >= (first_page_move-100) && curTop <= (first_page_move + 100)){
          $("#light_1").fadeIn(500);
        }else{/*结束点 = 改变距离 + 变化点 */
          $("#light_1").fadeOut(1000);
        }
        if(curTop >= (second_page_move-100) &&curTop <= (second_page_move + 100)){
          $("#light_2").fadeIn(500);
        }else{/*结束点 = 改变距离 + 变化点 */
          $("#light_2").fadeOut(1000);
        }
        if(curTop >= (third_page_move-100) &&curTop <= (third_page_move + 100)){
          $("#light_3").fadeIn(500);
        }else{/*结束点 = 改变距离 + 变化点 */
          $("#light_3").fadeOut(1000);
        }
        if(curTop >= (fourth_page_move-100) &&curTop <= (fourth_page_move + 100)){
          $("#light_4").fadeIn(500);
        }else{/*结束点 = 改变距离 + 变化点 */
          $("#light_4").fadeOut(1000);
        }
        //切换页面的按钮的出现和消失和变化
        if(curTop < video_height - 100){
          $("#turn_page_button_list").fadeOut(1000);
        }else{
          $("#turn_page_button_list").fadeIn(1000);
        }
        if(curTop >= $("#home_page_4").offset().top - 100){
          $("#turn_page_button_list").css({"background-image":"url('../image/top.png')","width":"10vw","height":"10vw","right":"3vw"});
        }else{
          $("#turn_page_button_list").css({"background-image":"url('../image/next.png')","width":"8vw","height":"8vw","right":"5vw"});
        }
        //判断第三个页面中小人和Pb的位置
        var third_moving_man = $("#moving_man_3").offset().top;
        var Pb_1 = $("#Pb_1").offset().top;
        var Pb_2 = $("#Pb_2").offset().top;
        if(third_moving_man >= Pb_1 -30){
          $("#Pb_1").fadeOut(500);
        }else{
          $("#Pb_1").fadeIn(500);
        }
        if(third_moving_man >= Pb_2 - 40){
          $("#Pb_2").fadeOut(500);
        }else{
          $("#Pb_2").fadeIn(500);
        }
        // //页面舞台灯光de出现和消失和变化
        // if(curTop >= first_page_move){
        //   $("#stage_light").fadeIn(500);
        // }else if(curTop == second_page_move){
        //   alert("second")
        //   $("#stage_light").fadeIn(500);
        // }else if(curTop == third_page_move){
        //   $("#stage_light").fadeIn(500);
        // }else if(curTop == fourth_page_move){
        //   $("#stage_light").fadeIn(500);
        // }else{
        //   $("#stage_light").css("display","none");
        // }
        // //第一个页面上小人的移动
        // var first_page_move_dis = 300;
        // var first_page_move_postion = (curTop - first_page_move) / first_page_move_dis * 100;
        // if(curTop < first_page_move){
        //   $("#home_first_move_icon").css("left","0px");
        // }else if(curTop >= first_page_move && curTop <= first_page_move_dis + first_page_move){
        //   $("#home_first_move_icon").css("left",first_page_move_postion+"%");
        // }else{
        //   $("home_first_move_icon").css("left","100%");
        // }
        //第一个页面小球掉落
        // var fir_ball_begin = 50 + video_height;
        // var fir_ball_dis = 300;
        // var fir_ball_left_position = (curTop - fir_ball_begin)/fir_ball_dis*100;
        // if(curTop <fir_ball_begin){
        //   //$("#home_first_move_icon_2").css("display","none");
        //   $("#home_first_move_icon_1").css("display","block");
        //   $("#home_first_move_icon_2").css("left","0%");
        // }else if(curTop >= fir_ball_begin && curTop < fir_ball_begin + fir_ball_dis){/*结束点 = 改变距离 + 变化点 */
        //   $("#home_first_move_icon_2").css("left",fir_ball_left_position+"%");
        //   //$("#home_first_move_icon_1").css("display","none");
        // }else if(curTop >= fir_ball_begin + fir_ball_dis){/*结束点 = 改变距离 + 变化点 */
        //   $("#home_first_move_icon_2").css("left","100%");
        // }
        // if(curTop >= fir_ball_begin + fir_ball_dis + 50){/*小球消失*/
        //   $("#home_first_move_icon_2").css("display","none");
        // }else{
        //   $("#home_first_move_icon_2").css("display","block");
        // }
        // 全部舍弃，使用svg
        //增加其他部分
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

//HOME切换页面按钮点击切换
//以及舞台灯光的显示
$(function(){
  $("#turn_page_button_list").click(function(){
    var first_page_move = $("#home_page_1").offset().top;
    var second_page_move = $("#home_page_2").offset().top;
    var third_page_move = $("#home_page_3").offset().top;
    var fourth_page_move = $("#home_page_4").offset().top;
    var curTop=$(window).scrollTop();
    if(curTop < first_page_move - 1){
      $("html,body").animate({scrollTop:first_page_move},1000);
    }else if(curTop < second_page_move - 1){
      $("html,body").animate({scrollTop:second_page_move},1000);
    }else if(curTop < third_page_move - 1 && curTop >= second_page_move - 1){
      $("html,body").animate({scrollTop:third_page_move},1000);
    }else if(curTop < fourth_page_move -1 && curTop >= third_page_move - 1){
      $("html,body").animate({scrollTop:fourth_page_move},1000);
    }else{
      $("html,body").animate({scrollTop:0},1000);
    }
  })
})



// 隐藏式菜单按钮
$(function(){
$(".navbar-button").click(function(){
    $(".navbar_nav").toggleClass("show_hide_nav");
})
})


//星星闪烁
function shine(){
  $("#star1").fadeToggle(1000);
  $("#star2").fadeToggle(1200);
  $("#star3").fadeToggle(1400);
}

var time_star =  window.setInterval(shine,1000);


//div高度随宽度变化
// var screen_height = window.screen.height;
// var screen_width = window.screen.width;
// $(window).resize(function(){
//   var window_width = $(window).width();
//   //背景图缩放
//   $("#background_box").css("height",screen_height * 3.1 / screen_width * window_width+'px');
//   //.container缩放
//   $(".container").css("height",screen_height / screen_width * window_width+'px')
// })

