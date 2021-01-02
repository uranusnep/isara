function openAccordionPanel() {
    $(".panel-heading").click(function(){
        $(this).next().slideToggle();
        $(this).children("p").addClass("underline-class");
        $(this).toggleClass("open");
        $(".panel-heading").not(this).children("p").removeClass("underline-class");
    });
}

function handlePagetopButtonShown() {
    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $(".pagetop").fadeIn();
        }else{
            $(".pagetop").fadeOut();
        }
    });
}

function onClickPagetopButton() {
    $(".pagetop").click(function(){
        $("html, body").animate({scrollTop:0},"slow");
    });
}

function scrollToContactForm(scrollTop) {
    $("html, body").animate({scrollTop:scrollTop},"slow");
}

$(function(){
    $(".pagetop").hide();

    openAccordionPanel();
            
    handlePagetopButtonShown();

    onClickPagetopButton();
    
    var down = $(".contactform").offset().top - $('header').height();

    $(".btn").click(function(){
        scrollToContactForm(down);
    });
    
    $(".conversionbtn").click(function() {
        scrollToContactForm(down);
    });
    
});