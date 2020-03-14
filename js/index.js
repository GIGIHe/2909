$(function(){

    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })
    $(".nav span").each(function (index) {
        $(this).click(function () {
            $(this).addClass('on').siblings('span').removeClass('on');
            $(".contab").hide().eq(index).show()
        })
    })
    // a href 对应跳转位置的id
    $('.dt .a1').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    $('.dt .a2').click(function () {
        $('html, body').animate({
            scrollTop: $(".conb").offset().top + 'rem'
        }, 500);
        return false;
    });
    $('.dt .a3').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    $(".mask span").click(function () {
        $(".mask").fadeOut()
    })
    $(".cont a").click(function () {
        $(".mask").fadeIn()
    }) 
 
})