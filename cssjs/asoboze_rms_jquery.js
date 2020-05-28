// JavaScript Document
$(function() {

        $('.effect .hop').css({

            'opacity': '0',

            'padding-top': '10px'

        });

        $(window).scroll(function() {

            $('.effect').each(function() {

                var imgPos = $(this).offset().top;

                var scroll = $(window).scrollTop();

                var windowHeight = $(window).height();

                if (scroll > imgPos - windowHeight + windowHeight / 10) {

                    $('.hop', this).css({

                        'opacity': '1',

                        'padding-top': '0'

                    });

                    $('i', this).css({

                        'font-size': '100px',

                        'padding': '0 20px 40px'

                    });

                }

            });

        });

    });

    $(function() {

        
        $('.icon-wrap').click(function() {

            $(this).toggleClass('active');

            $('body').toggleClass('fixing');

        });
    });
var nowchecked = $('input[name=pick_brand]:checked').val();
$('input[name=pick_brand]').click(function(){
	if($(this).val() == nowchecked) {
		$(this).prop('checked', false);
		nowchecked = false;
	} else {
		nowchecked = $(this).val();
	}
});        

                  });
document.write("<script
    src                       = \"https://font.realtype.jp/api/script/v4\"
    data-rt-user              = \"GNBcJ26oceJJeERcKWLJHCPjXG0iWWiZ\"
    data-rt-input             = \"true\"
></script>");