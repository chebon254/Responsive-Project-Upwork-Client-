$('.nav-toggle').click(function (event) {
    var hrefAttribute = $(this).attr('href');
    var hrefText = $(this).text();
    var divId = hrefAttribute.replace("#", "");
    if (hrefText === "...More") {
        $("#" + divId).show();
        $(this).text("Less");
    } else if (hrefText === "Less") {
        $("#" + divId).hide();
        $(this).text("...More");
    }
});
$("#searchToggle").click(function () {
    var gold = 'rgb(255, 199, 87)';
    var white = 'rgb(255, 255, 255)';
    var color = $(this).css("color");
    if (color === white) {
        $(this).css("color", gold);
        $(".content_wrap").fadeIn(500);
    } else if (color === gold) {
        $(this).css("color", white);
        $(".content_wrap").fadeOut(500);
    }
});