$(function(){
    
    $(".panel-heading").click(function(){
        $(this).next().slideToggle();
        $(this).children("p").addClass("underline-class");
        $(this).toggleClass("open")
    });
    
    $(".panel-heading").on("click", function(){
        $(".panel-heading").not(this).children("p").removeClass("underline-class")
    });
    
    $(".pagetop").hide();
    
    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $(".pagetop").fadeIn();
        }else{
            $(".pagetop").fadeOut();
        }
    });
    
    $(".pagetop").click(function(){
        $("html, body").animate({scrollTop:0},"slow");
    });
    
    var headerHeight = $('header').height();

    $(".btn").click(function(){
        var down = $(".contactform").offset().top - headerHeight;
        $("html, body").animate({scrollTop:down},"slow");
    });
    
    $(".conversionbtn").click(function() {
        var down = $(".contactform").offset().top - headerHeight;
        $("html, body").animate({scrollTop:down},"slow");
    });
    
    
    
});