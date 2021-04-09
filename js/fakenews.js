var sms;

init = (e) => {
    $("#smsForm").toggle("slow");
    sms = $("#sms").val();
    setTimeout(show_loading, 600);
    setTimeout(hide_loading, 2800);
    setTimeout(show_popup, 3000);
    setTimeout(show_code, 3200);
    document.querySelector('#console7').innerHTML = "Message " + sms + " sent";
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
        }, i * 800);
      }
 };