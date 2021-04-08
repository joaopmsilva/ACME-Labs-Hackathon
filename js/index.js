init = (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.location.href='tel:+351932814388';
};

alertFactory = (text, eClass) => {
        var alert = $("#alert");
        alert.empty();
        alert.removeClass();
        alert.addClass(eClass);
        alert.text(text);
};