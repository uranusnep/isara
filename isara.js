$(function(){
    
    $(".panel-heading").click(function(){
        $(this).next().slideToggle();
        $(this).children("p").addClass("underline-class");
        $(this).toggleClass("open")
    });
    
    $(".panel-heading").on("click", function(){
        $(".panel-heading").not(this).children("p").removeClass("underline-class")
    });
    
    
});