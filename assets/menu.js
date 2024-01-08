// $(document).ready(function(){

//     $(".burger-nav").on("click", function(){

//         $(".header nav ul").toggleClass("open");
//     });
// })

$(document).ready(function(){
    var $burgerNav = $(".burger-nav");
    $burgerNav.on("click touchstart", function(){
        $(".header nav ul").toggleClass("open");
    });
 });