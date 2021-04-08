changeCam = (id) => {

    var videoid;

    switch (id) {
        case "lisbon": videoid = "Tc5MW1Lxw_k";
            break;
        case "ny": videoid = "gFI5ieIpLzU";
            break;
        case "madrid": videoid = "Tc5MW1Lxw_k";
            break;
    }

    $(".videoWrapper iframe").remove();
    $('<iframe width="400" height="680" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
        .attr("src", "http://www.youtube.com/embed/" + videoid + "?autoplay=1")
        .appendTo(".videoWrapper");

};
