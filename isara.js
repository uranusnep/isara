$(function(){
    
    $(".panel-heading").click(function(){
        $(this).next().slideToggle() 
    });
    
    $(".panel-heading").click(function(){
        $(this).children(".question-toggle").toggleClass("angle-up-toggle")
    });
    
    $(".panel-text").click(function(){
        $(this).css("text-decoration","underline")
    });
    
});