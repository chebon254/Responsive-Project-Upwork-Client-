function autoComplete(e) {
    e.devbridgeAutocomplete({
        serviceUrl: 'search.php',
        type: 'POST',
        onSelect: function (response) {
            window.location.href = "/" + response.data.url_name;
        }
    });
}
$("#searchField").on('focus', function (e) {
    autoComplete($(this));
}).keypress(function (e) {
    var key = e.which;
    if (key == 13) {
        var postalcode = $(this).val();
        window.location.href = "/postalcode/" + postalcode.replace(/\s/g, '').toUpperCase();
        return false;
    } else {
        autoComplete($(this));
    }
});
$("#submit").on('click', function (e) {
    var postalcode = $("#searchField").val();
    window.location.href = "/postalcode/" + postalcode.replace(/\s/g, '').toUpperCase();
    return false;
});