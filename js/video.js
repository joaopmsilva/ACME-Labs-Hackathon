changeCam = (id) => {

    var videoid;

    switch (id) {
        case "russia": videoid = "../html/resources/videos/russia.mp4";
            break;
        case "usa": videoid = "../html/resources/videos/usa.mp4";
            break;
        case "thailand": videoid = "../html/resources/videos/thailand.mp4";
            break;
        case "china": videoid = "../html/resources/videos/china.mp4";
            break;
    }

    console.log(videoid);

    $('#video video source').attr('src', videoid);
    console.log($('#video video source').attr('src', videoid));

};