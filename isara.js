$(function(){
    
    $(".panel-title").click(function(){
        $(this).parent().next().slideToggle() 
    });
    
    $(".panel-title").click(function(){
        $(this).children("div").toggleClass("angle-up-toggle")
    });
    
    $(".panel-text").click(function(){
        $(this).css("text-decoration","underline")
    });
    
});