init = (event) => {
    event.preventDefault();
    event.stopPropagation();
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
};

alertFactory = (text, eClass) => {
        var alert = $("#alert");
        alert.empty();
        alert.removeClass();
        alert.addClass(eClass);
        alert.text(text);
};

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://webcamstravel.p.rapidapi.com/webcams/list/orderby=popularity,desc?lang=en&show=webcams%3Aimage%2Clocation",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7114b85010msh1fa413f6ddbc3b8p1a94fajsn6a67c1c7b2ea",
		"x-rapidapi-host": "webcamstravel.p.rapidapi.com"
	}
};