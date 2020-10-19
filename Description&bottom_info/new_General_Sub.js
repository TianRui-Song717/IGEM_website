$(function(){
  //description_roadmap
  var circle_1_len = parseFloat($("#map_circle_1").css("stroke-dasharray"));
  var line_1_len = parseFloat($("#map_line_1").css("stroke-dasharray"));
  var line_2_len = parseFloat($("#map_line_2").css("stroke-dasharray"));
  var circle_2_len = parseFloat($("#map_circle_2").css("stroke-dasharray"));
  var circle_3_len = parseFloat($("#map_circle_3").css("stroke-dasharray"));
  var circle_4_len = parseFloat($("#map_circle_4").css("stroke-dasharray"));
  var circle_5_len = parseFloat($("#map_circle_5").css("stroke-dasharray"));
  var line_3_len = parseFloat($("#map_line_3").css("stroke-dasharray"));
  var line_4_len = parseFloat($("#map_line_4").css("stroke-dasharray"));
  var circle_6_len = parseFloat($("#map_circle_6").css("stroke-dasharray"));
  var circle_7_len = parseFloat($("#map_circle_7").css("stroke-dasharray"));
  var line_5_len = parseFloat($("#map_line_5").css("stroke-dasharray"));
  var line_6_len = parseFloat($("#map_line_6").css("stroke-dasharray"));
  var line_7_len = parseFloat($("#map_line_7").css("stroke-dasharray"));
  var line_8_len = parseFloat($("#map_line_8").css("stroke-dasharray"));
  var line_9_len = parseFloat($("#map_line_9").css("stroke-dasharray"));
  var circle_8_len = parseFloat($("#map_circle_8").css("stroke-dasharray"));
  var line_10_len = parseFloat($("#map_line_10").css("stroke-dasharray"));
  var line_11_len = parseFloat($("#map_line_11").css("stroke-dasharray"));




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
    if(curTop >= (element_4 - 10) && curTop < (element_5 - 300)){
      $("#sidenav_4").addClass("general_side_nav_color");
    }else{
      $("#sidenav_4").removeClass("general_side_nav_color");
    }
    if(curTop >= (element_5 - 300)){
      $("#sidenav_5").addClass("general_side_nav_color");
    }else{
      $("#sidenav_5").removeClass("general_side_nav_color");
    }

    //Description_roadmap
    var half_window = $(window).height()/2;
    var circle_1 = $("#map_circle_1").offset().top - half_window;
    var line_1 = $("#map_line_1").offset().top - half_window;
    var line_2 = $("#map_line_2").offset().top - half_window;
    var circle_2 = $("#map_circle_2").offset().top - half_window;
    var circle_3 = $("#map_circle_3").offset().top - half_window;
    var circle_4 = $("#map_circle_4").offset().top - half_window;
    var circle_5 = $("#map_circle_5").offset().top - half_window;
    var line_3 = $("#map_line_3").offset().top - half_window;
    var line_4 = $("#map_line_4").offset().top - half_window;
    var line_5 = $("#map_line_5").offset().top - half_window;
    var line_6 = $("#map_line_6").offset().top - half_window;
    var line_7 = $("#map_line_7").offset().top - half_window;
    var line_8 = $("#map_line_8").offset().top - half_window;
    var line_9 = $("#map_line_9").offset().top - half_window;
    var circle_6 = $("#map_circle_6").offset().top - half_window;
    var circle_7 = $("#map_circle_7").offset().top - half_window;
    var circle_8 = $("#map_circle_8").offset().top - half_window;
    var line_10 = $("#map_line_10").offset().top - half_window;
    var line_11 = $("#map_line_11").offset().top - half_window;


    if(curTop <circle_1){
      $("#map_circle_1").css("stroke-dashoffset", circle_1_len);
    }else if(curTop >= circle_1 && curTop < circle_1 + 150){
      var rotate_degree = circle_1_len - (circle_1_len * (curTop - circle_1) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_circle_1").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= circle_1 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_circle_1").css("stroke-dashoffset","0");
    }

    if(curTop <line_1){
      $("#map_line_1").css("stroke-dashoffset", line_1_len);
    }else if(curTop >= line_1 && curTop < line_1 + 150){
      var rotate_degree = line_1_len - (line_1_len * (curTop - line_1) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_line_1").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= line_1 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_line_1").css("stroke-dashoffset","0");
    }

    if(curTop <line_2){
      $("#map_line_2").css("stroke-dashoffset", line_2_len);
    }else if(curTop >= line_2 && curTop < line_2 + 150){
      var rotate_degree = line_2_len - (line_2_len * (curTop - line_2) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_line_2").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= line_2 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_line_2").css("stroke-dashoffset","0");
    }

    if(curTop <circle_2){
      $("#map_circle_2").css("stroke-dashoffset", circle_2_len);
    }else if(curTop >= circle_2 && curTop < circle_2 + 150){
      var rotate_degree = circle_2_len - (circle_2_len * (curTop - circle_2) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_circle_2").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= circle_2 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_circle_2").css("stroke-dashoffset","0");
    }

    if(curTop <circle_3){
      $("#map_circle_3").css("stroke-dashoffset", circle_3_len);
    }else if(curTop >= circle_3 && curTop < circle_3 + 150){
      var rotate_degree = circle_3_len - (circle_3_len * (curTop - circle_3) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_circle_3").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= circle_3 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_circle_3").css("stroke-dashoffset","0");
    }

    if(curTop <circle_4){
      $("#map_circle_4").css("stroke-dashoffset", circle_4_len);
    }else if(curTop >= circle_4 && curTop < circle_4 + 150){
      var rotate_degree = circle_4_len - (circle_4_len * (curTop - circle_4) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_circle_4").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= circle_4 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_circle_4").css("stroke-dashoffset","0");
    }

    if(curTop <circle_5){
      $("#map_circle_5").css("stroke-dashoffset", circle_5_len);
    }else if(curTop >= circle_5 && curTop < circle_5 + 150){
      var rotate_degree = circle_5_len - (circle_5_len * (curTop - circle_5) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_circle_5").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= circle_5 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_circle_5").css("stroke-dashoffset","0");
    }

    if(curTop <line_3){
      $("#map_line_3").css("stroke-dashoffset", line_3_len);
      $(".map_second_info").css("display","none");
    }else if(curTop >= line_3 && curTop < line_3 + 150){
      var rotate_degree = line_3_len - (line_3_len * (curTop - line_3) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_line_3").css("stroke-dashoffset",rotate_degree);
      $(".map_second_info").fadeIn(500);
    }else if(curTop >= line_3 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_line_3").css("stroke-dashoffset","0");
      $(".map_second_info").fadeOut(1000);
    }

    if(curTop <line_4){
      $("#map_line_4").css("stroke-dashoffset", line_4_len);
    }else if(curTop >= line_4 && curTop < line_4 + 150){
      var rotate_degree = line_4_len - (line_4_len * (curTop - line_4) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_line_4").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= line_4 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_line_4").css("stroke-dashoffset","0");
    }

    if(curTop <line_5){
      $("#map_line_5").css("stroke-dashoffset", line_5_len);
      $(".map_third_info").css("display","none");
    }else if(curTop >= line_5 && curTop < line_5 + 150){
      var rotate_degree = line_5_len - (line_5_len * (curTop - line_5) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_line_5").css("stroke-dashoffset",rotate_degree)
      $(".map_third_info").fadeIn(500);
    }else if(curTop >= line_5 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_line_5").css("stroke-dashoffset","0");
      $(".map_third_info").fadeOut(1000);
    }

    if(curTop <line_6){
      $("#map_line_6").css("stroke-dashoffset", line_6_len);
      $(".map_fourth_info").css("display","none");
    }else if(curTop >= line_6 && curTop < line_6 + 150){
      var rotate_degree = line_6_len - (line_6_len * (curTop - line_6) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_line_6").css("stroke-dashoffset",rotate_degree);
      $(".map_fourth_info").fadeIn(500);
    }else if(curTop >= line_6 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_line_6").css("stroke-dashoffset","0");
      $(".map_fourth_info").fadeOut(1000);
    }

    if(curTop <circle_6){
      $("#map_circle_6").css("stroke-dashoffset", circle_6_len);
    }else if(curTop >= circle_6 && curTop < circle_6 + 150){
      var rotate_degree = circle_6_len - (circle_6_len * (curTop - circle_6) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_circle_6").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= circle_6 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_circle_6").css("stroke-dashoffset","0");
    }

    if(curTop <circle_7){
      $("#map_circle_7").css("stroke-dashoffset", circle_7_len);
    }else if(curTop >= circle_7 && curTop < circle_7 + 150){
      var rotate_degree = circle_7_len - (circle_7_len * (curTop - circle_7) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_circle_7").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= circle_7 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_circle_7").css("stroke-dashoffset","0");
    }

    if(curTop <line_7){
      $("#map_line_7").css("stroke-dashoffset", line_7_len);
    }else if(curTop >= line_7 && curTop < line_7 + 150){
      var rotate_degree = line_7_len - (line_7_len * (curTop - line_7) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_line_7").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= line_7 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_line_7").css("stroke-dashoffset","0");
    }

    if(curTop <line_8){
      $("#map_line_8").css("stroke-dashoffset", line_8_len);
    }else if(curTop >= line_8 && curTop < line_8 + 150){
      var rotate_degree = line_8_len - (line_8_len * (curTop - line_8) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_line_8").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= line_8 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_line_8").css("stroke-dashoffset","0");
    }

    if(curTop <line_9){
      $("#map_line_9").css("stroke-dashoffset", line_9_len);
    }else if(curTop >= line_9 && curTop < line_9 + 150){
      var rotate_degree = line_9_len - (line_9_len * (curTop - line_9) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_line_9").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= line_9 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_line_9").css("stroke-dashoffset","0");
    }

    if(curTop <line_10){
      $("#map_line_10").css("stroke-dashoffset", line_10_len);
    }else if(curTop >= line_10 && curTop < line_10 + 150){
      var rotate_degree = line_10_len - (line_10_len * (curTop - line_10) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_line_10").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= line_10 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_line_10").css("stroke-dashoffset","0");
    }

    if(curTop <line_11){
      $("#map_line_11").css("stroke-dashoffset", line_11_len);
    }else if(curTop >= line_11 && curTop < line_11 + 150){
      var rotate_degree = line_11_len - (line_11_len * (curTop - line_11) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_line_11").css("stroke-dashoffset",rotate_degree)
    }else if(curTop >= line_11 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_line_11").css("stroke-dashoffset","0");
    }

    if(curTop <circle_8){
      $("#map_circle_8").css("stroke-dashoffset", circle_8_len);
      $(".map_fifth_info").css("display","none");
    }else if(curTop >= circle_8 && curTop < circle_8 + 150){
      var rotate_degree = circle_8_len - (circle_8_len * (curTop - circle_8) / 150); //总长 - （总长 * （当前-改变点）/ 改变距离）
      $("#map_circle_8").css("stroke-dashoffset",rotate_degree);
      $(".map_fifth_info").fadeIn(500);
    }else if(curTop >= circle_8 + 150){/*结束点 = 改变距离 + 变化点 */
      $("#map_circle_8").css("stroke-dashoffset","0");
      $(".map_fifth_info").fadeOut(1000);
    }


    //
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
    }
  })
})
