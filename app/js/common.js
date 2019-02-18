$(function() {

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".mobile-mnu").slideToggle();
        return false;
    });

    $('.prod-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1
    });

    $('#prod-mnu').smartmenus();

    $('.prod-item-rate').raty({
        path: "libs/raty/img/"
    });

    function heightses() {
        if ($(window).width()>480) {
            $('.prod-item-img').height('auto').equalHeights();
        }
    }

    $(window).resize(function() {
        heightses();
    });

    heightses();

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });
});
