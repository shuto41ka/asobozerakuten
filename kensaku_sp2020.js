// JavaScript Document
$(function() {
    var topMenu = $('#shouhinkensaku2');    
    topMenu.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            topMenu.fadeIn();
        } else {
            topMenu.fadeOut();
        }
		    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    });
});
// JavaScript Document
$(function() {
    var topMenu = $('#sptopmenu2');    
    topMenu.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            topMenu.fadeIn();
        } else {
            topMenu.fadeOut();
        }
		    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    });
});
