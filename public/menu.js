$(document).ready(function() {

    $("#trigger").click(function() {
        $("#nav-menu").toggleClass("show");
        if ($("#nav-menu").hasClass("show")) {
            $(".trigger-btn").attr("src", "/images/icon-close.svg")
        } else {
            $(".trigger-btn").attr("src", "/images/icon-hamburger.svg")
        }
    });

});