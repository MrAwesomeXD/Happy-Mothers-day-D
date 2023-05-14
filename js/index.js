
$(document).ready(function($) {

    $('#home').css('opacity', 1);

    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });

    $('.goA').click(function(){
        var top = $(this.hash).offset().top;
        console.log(this);
        if($(this).attr('href').indexOf('welcome') != -1){
            $('html,body').animate({
                scrollTop:top
            }, 800);
        }else{
            $('html,body').animate({
                scrollTop:top - $('#cbp-spmenu-s1').height()
            }, 800);
        }

        return false;
    })
    
    var nextIndex = 1;
    $('#goBelow').click(function(){
        switch (nextIndex){
            case 1:
                $(this).attr('href', '#welcome');
                break;
            case 2:
                $(this).attr('href', '#abt');
                break;
            case 3:
                $(this).attr('href', '#services');
                break;
            case 4:
                $(this).attr('href', '#future');
                break;
            case 5:
                $(this).attr('href', '#footer');
                break;
        }
        console.log($(this.hash).offset().top);
        var top = $(this.hash).offset().top;
        if(!$('html,body').is(':animated')){
            $('html,body').animate({
                scrollTop:top
            }, 800);
            nextIndex ++;
        }
        return false;
    })

    $(window).scroll(function(){
        var nowScrollTop = $(window).scrollTop() + 1;

        var welcomeTop = $('#welcome').offset().top;
        var abtTop = $('#abt').offset().top;
        var servicesTop = $('#services').offset().top;
        var futureTop = $('#future').offset().top;
        var footerTop = $('#footer').offset().top;

        var sTop = document.body.scrollTop || document.documentElement.scrollTop;
        var clientH = document.documentElement.clientHeight;
        var scrollH = document.body.scrollHeight;

        if(nowScrollTop < welcomeTop){
            nextIndex = 1;
            $('#goBelow').css('opacity', 1);
        }else if(nowScrollTop >= welcomeTop && nowScrollTop < abtTop){
            nextIndex = 2;
            $('#goBelow').css('opacity', 1);
        }else if(nowScrollTop >= abtTop && nowScrollTop < servicesTop){
            nextIndex = 3;
            $('#goBelow').css('opacity', 1);
        }else if(nowScrollTop >= servicesTop && nowScrollTop < futureTop){
            nextIndex = 4;
            $('#goBelow').css('opacity', 1);
        }else if(nowScrollTop >= futureTop && nowScrollTop < footerTop){
            nextIndex = 5;
            $('#goBelow').css('opacity', 1);
        }
        if(scrollH == sTop + clientH){
            $('#goBelow').css('opacity', 0);
        }

    })

    $(window).resize(function(){
        var windWidth = $(window).width();
        var winHeight = $(window).height();
        console.log(windWidth + ' X ' + winHeight);
        if(windWidth > 760){
            $('#nicescroll-body').niceScroll({
                cursorcolor: "black",
                cursoropacitymax: 0.5, 
                touchbehavior: false, 
                spacebarenabled:true, 
                cursorwidth: "8px",
                cursorborder: "0",
                cursorborderradius: "4px",
                autohidemode: true,
                zindex:"auto",
                railpadding: { top:0, right:0, left:0, bottom:0 }
            });
            $('#home').height(winHeight);

            $('#goBelow').css('display', 'block');
        }else{
            $('#goBelow').css('display', 'none');
        }
        $('#nicescroll-body').niceScroll().resize();
    })
    $(window).resize();

});
