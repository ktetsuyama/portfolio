$(document).ready(function(){

    $(".burger-nav").on("click", function(){
        setTimeout(function(){
            $(".header nav ul").toggleClass("open");
        }, 10);
    });
})