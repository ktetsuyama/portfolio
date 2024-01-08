// $(document).ready(function(){

//     $(".burger-nav").on("click", function(){

//         $(".header nav ul").toggleClass("open");
//     });
// })

document.addEventListener("DOMContentLoaded", function() {
    var burgerNav = document.querySelector(".burger-nav");
    burgerNav.addEventListener("click", function(){
        var headerNavUl = document.querySelector(".header nav ul");
        headerNavUl.classList.toggle("open");
    });
 });