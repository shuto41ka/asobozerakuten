// JavaScript Document
$(function() {
    $("#pcIndexRight").load("https://www.rakuten.ne.jp/gold/asoboze/parts/pcindex_rightmenu.html");
    $("#pc_toplinebanner").load("https://www.rakuten.ne.jp/gold/asoboze/parts/pc_toplinebanner.html");
    $("#pcleftbanner").load("https://www.rakuten.ne.jp/gold/asoboze/parts/pc_leftbanner.html")

    $("#pcthreemenu2").load("https://www.rakuten.ne.jp/gold/asoboze/index2020pc_beta.html .topthree2");
    $("#pcthreemenu3").load("https://www.rakuten.ne.jp/gold/asoboze/index2020pc_beta.html .topthree3");
    $("#spheader").load("https://www.rakuten.ne.jp/gold/asoboze/parts/header_aso.html");
    $("#footer-aso").load("https://www.rakuten.ne.jp/gold/asoboze/parts/footer_aso.html");
        $("#styles").load("https://www.rakuten.ne.jp/gold/asoboze/parts/othergallery.html");
        });
});
$(function(){
  $('.effect .hop').css({"opacity":"0", "padding-top":"10px"});
  $(window).scroll(function (){
    $(".effect").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/10){
        $(".hop",this).css({"opacity":"1", "padding-top": "0" });
        $("i",this).css({ 
          "font-size": "100px",
          "padding": "0 20px 40px"
        });
      } 
    });
  });
});
        $(function() {
        $(".icon-wrap").click(function() {
            $(this).toggleClass("active");
            $("body").toggleClass("fixing");
            $(".iframe_header").toggleClass("iframe_touched");
        });
    });
$(function() {
    $(".iframe_open").click(function() {
        $(".iframe_header").toggleClass("iframe_touched");
    })
})
var menuHeight = 50;
var startPos = 0;
$(window).scroll(function(){
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos && $("body").hasClass("fixing") == false) {
    if($(window).scrollTop() >= 200) {
      $(".spheader_aso").css("top", "-" + 50 + "px");
    }
  } else {
    $(".spheader_aso").css("top", 0 + "px");
  }
  startPos = currentPos;
});  
