var elHeaderlist = document.querySelector(".header-list");
var elBurger = document.querySelector(".burger");

elBurger.addEventListener("click", function(){
    elHeaderlist.classList.toggle("header-list-menu")
})