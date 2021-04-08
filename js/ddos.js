var ip;

init = (e) => {
    $("#ipForm").toggle("slow");
    ip = $("#ip").val();
    setTimeout(show_loading, 600);
    setTimeout(hide_loading, 4800);
    setTimeout(show_popup, 5000);
    setTimeout(show_code, 6500);
    document.querySelector('#console2').innerHTML = "Pinging " + ip + " with 65500 bytes of data:";
    document.querySelector('#console3').innerHTML = "Reply from " + ip + " bytes=65500 time=210ms";
    document.querySelector('#console4').innerHTML = "Reply from " + ip + " bytes=65500 time=989ms";
    document.querySelector('#console5').innerHTML = "Reply from " + ip + " bytes=65500 time=9650ms";
    document.querySelector('#console6').innerHTML = "Reply from " + ip + " bytes=65500 time=11650ms";
    document.querySelector('#console9').innerHTML = "=> Attack successful. " + ip + " no longer has connection.";
}

function hide_loading(){
    $("#loading").toggle();
};

function show_loading(){
    $("#loading").toggle("slow");
}

function show_popup(){
    $("#terminal").toggle("slow");
 };

 function show_code(){
    for (let i = 1; i < 10; i++) {
        setTimeout(function timer() {
            $("#console" + i).toggle();
        }, i * 1000);
      }
 };