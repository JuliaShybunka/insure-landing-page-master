$(document).ready(function() {

    $("#trigger").click(function() {
        $("#nav-menu").toggleClass("show");
        if ($("#nav-menu").hasClass("show")) {
            $(".trigger-btn").attr("src", "public/images/icon-close.svg")
        } else {
            $(".trigger-btn").attr("src", "public/images/icon-hamburger.svg")
        }
    });

});