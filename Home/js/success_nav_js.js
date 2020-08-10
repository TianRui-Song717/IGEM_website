//nav 部分下滑设置透明度
var nav_change_color_height = 10;//导航栏变色
var road_map_circle_first_start = 100;//导航栏变色
var roadmap_fir_cir = 1500;
var roadmap_fir_line = 1700;
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
        //RoadMap的滚动
        //第一个圆环改变
        if(curTop <roadmap_fir_cir){
          $(".circle").css("stroke-dashoffset","251")
        }else if(curTop >= roadmap_fir_cir && curTop < 1700){/*结束点 = 改变距离 + 变化点 */
          rotate_degree = 251- (251 * (curTop - roadmap_fir_cir) / 200); //总长 - （总长 * （当前-改变点）/ 改变距离）
          $(".circle").css("stroke-dashoffset",rotate_degree)
        }else if(curTop >= 1700){/*结束点 = 改变距离 + 变化点 */
          $(".circle").css("stroke-dashoffset","0")
        }
        //第一条竖线改变
        if(curTop <roadmap_fir_cir){
          $(".v_line_div").css("stroke-dashoffset","251")
        }else if(curTop >= roadmap_fir_cir && curTop < 1700){/*结束点 = 改变距离 + 变化点 */
          rotate_degree = 251- (251 * (curTop - roadmap_fir_cir) / 200); //总长 - （总长 * （当前-改变点）/ 改变距离）
          $(".v_line_div").css("stroke-dashoffset",rotate_degree)
        }else if(curTop >= 1700){/*结束点 = 改变距离 + 变化点 */
          $(".v_line_div").css("stroke-dashoffset","0")
        }
        //主页动画效果
        //第一个页面小蝴蝶的路径
        var butterfly_begin = -450 + video_height;
        var butter_move_dis = 300;
        var butter_top_position = (curTop - butterfly_begin)/butter_move_dis*100;
        var butter_left_position = -0.01 * (butter_top_position*butter_top_position - 100*butter_top_position);
        if(curTop <butterfly_begin){
          $("#home_first_move_icon_1").css("top","0%");
          $("#home_first_move_icon_1").css("left","0%");
        }else if(curTop >= butterfly_begin && curTop < butterfly_begin + butter_move_dis){/*结束点 = 改变距离 + 变化点 */
          $("#home_first_move_icon_1").css("top",butter_top_position+"%");
          $("#home_first_move_icon_1").css("left",butter_left_position+"%");
        }else if(curTop >= butterfly_begin + butter_move_dis){/*结束点 = 改变距离 + 变化点 */
          $("#home_first_move_icon_1").css("top","100%");
          $("#home_first_move_icon_1").css("left","0%");
        }
        //所有页面文字信息
        var screen_height = window.screen.height;
        var screen_width = window.screen.width;
        if(curTop <butterfly_begin){
          $("#home_first_info").fadeOut(1000);
        }else{/*结束点 = 改变距离 + 变化点 */
          $("#home_first_info").fadeIn(1000);
        }
        if(curTop <butterfly_begin + screen_height){
          $("#home_second_info").fadeOut(1000);
        }else{/*结束点 = 改变距离 + 变化点 */
          $("#home_second_info").fadeIn(1000);
        }
        if(curTop <butterfly_begin + 2 * screen_height){
          $("#home_third_info").fadeOut(1000);
        }else{/*结束点 = 改变距离 + 变化点 */
          $("#home_third_info").fadeIn(1000);
        }
        if(curTop <butterfly_begin + 3 * screen_height - 100){
          $("#home_fourth_info").fadeOut(1000);
        }else{/*结束点 = 改变距离 + 变化点 */
          $("#home_fourth_info").fadeIn(1000);
        }
        //第一个页面小球的路径
        var fir_ball_begin = 50 + video_height;
        var fir_ball_dis = 300;
        var fir_ball_left_position = (curTop - fir_ball_begin)/fir_ball_dis*100;
        if(curTop <fir_ball_begin){
          //$("#home_first_move_icon_2").css("display","none");
          $("#home_first_move_icon_1").css("display","block");
          $("#home_first_move_icon_2").css("left","0%");
        }else if(curTop >= fir_ball_begin && curTop < fir_ball_begin + fir_ball_dis){/*结束点 = 改变距离 + 变化点 */
          $("#home_first_move_icon_2").css("left",fir_ball_left_position+"%");
          //$("#home_first_move_icon_1").css("display","none");
        }else if(curTop >= fir_ball_begin + fir_ball_dis){/*结束点 = 改变距离 + 变化点 */
          $("#home_first_move_icon_2").css("left","100%");
        }
        if(curTop >= fir_ball_begin + fir_ball_dis + 50){/*小球消失*/
          $("#home_first_move_icon_2").css("display","none");
        }else{
          $("#home_first_move_icon_2").css("display","block");
        }
        //第二个页面竖直小球的路径
        //var sec_ball_begin = $("#home_page_2").offset().top - $("#home_page_2").height() + 400;
        var sec_ball_begin = butterfly_begin + screen_height;
        var sec_ball_dis = 400;
        var sec_ball_top_position = (curTop - sec_ball_begin) / sec_ball_dis * 100;
        if(curTop <sec_ball_begin){
          $("#tube_ball_1").css("display","none");
          $("#tube_ball_1").css("top","-15%");
        }else if(curTop >= sec_ball_begin && curTop < sec_ball_begin + sec_ball_dis){/*结束点 = 改变距离 + 变化点 */
          $("#tube_ball_1").css("top",sec_ball_top_position - 15 +"%");
          $("#tube_ball_1").css("display","block");
        }else if(curTop >= sec_ball_begin + sec_ball_dis){/*结束点 = 改变距离 + 变化点 */
          $("#tube_ball_1").css("top","85%");
          $("#tube_ball_1").css("display","none");
        }
        //第三个页面小球的路径
        var thir_ball_begin = butterfly_begin + 2 * screen_height -150;
        var thir_ball_dis = 300;
        var thir_ball_top_position = (curTop - thir_ball_begin) / thir_ball_dis * 100;
        if(curTop < thir_ball_begin){
          $("#tube_ball_2").css("display","none");
          $("#tube_ball_2").css("top","0%");
        }else if(curTop >= thir_ball_begin && curTop < thir_ball_begin + thir_ball_dis){/*结束点 = 改变距离 + 变化点 */
          $("#tube_ball_2").css("top",thir_ball_top_position+"%");
          $("#tube_ball_2").css("display","block");
        }else if(curTop >= thir_ball_begin + thir_ball_dis){/*结束点 = 改变距离 + 变化点 */
          $("#tube_ball_2").css("top","100%");
          // $("#tube_ball_2").css("display","none");
        }
        //第四个页面小球的路径
        var four_ball_begin = butterfly_begin + 3 * screen_height -200;
        var four_ball_dis = 300;
        var four_ball_top_position = (curTop - four_ball_begin) / four_ball_dis * 100;
        if(curTop < four_ball_begin){
          $("#tube_ball_3").css("display","none");
          $("#tube_ball_3").css("top","0%");
        }else if(curTop >= four_ball_begin && curTop < four_ball_begin + four_ball_dis){/*结束点 = 改变距离 + 变化点 */
          $("#tube_ball_3").css("top",four_ball_top_position+"%");
          $("#tube_ball_3").css("display","block");
        }else if(curTop >= four_ball_begin + four_ball_dis){/*结束点 = 改变距离 + 变化点 */
          $("#tube_ball_3").css("top","100%");
          // $("#tube_ball_3").css("display","none");
        }
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


// 隐藏式菜单按钮
$(function(){
$(".navbar-button").click(function(){
    $(".navbar_nav").toggleClass("show_hide_nav");
})
})


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
