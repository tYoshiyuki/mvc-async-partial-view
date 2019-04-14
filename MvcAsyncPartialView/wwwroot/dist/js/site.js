$(function () {
    $(".partial-contents").each(function (index, item) {
        var url = $(item).data("action");
        if (url && url.length > 0) {
            $(item).load(url);
        }
    });
});