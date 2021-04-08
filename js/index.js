init = (event) => {
    event.preventDefault();
    event.stopPropagation();
    alertFactory("TEST -- Ready", "alert alert-success");
};

alertFactory = (text, eClass) => {
        var alert = $("#alert");
        alert.empty();
        alert.removeClass();
        alert.addClass(eClass);
        alert.text(text);
};