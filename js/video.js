changeCam = (id) => {

    var videoid;

    switch (id) {
        case "lisbon": videoid = "9s_HrcAjRj8";
            break;
        case "ny": videoid = "_JzeIf1zT14";
            break;
        case "madrid": videoid = "J_pIlkbZAKM";
            break;
    }

    $(".videoWrapper iframe").remove();
    $('<iframe width="400" height="680" frameborder="0" allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>')
        .attr("src", "http://www.youtube.com/embed/" + videoid + "?autoplay=1")
        .appendTo(".videoWrapper");

};