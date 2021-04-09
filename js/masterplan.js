$(function(){
    var loading = $('#loadbar').hide();
    var i = 0;
    document.querySelector('#questionText').innerHTML = questions[i];
    document.querySelector('#answerOne').innerHTML = answers[i][0];
    document.querySelector('#answerTwo').innerHTML = answers[i][1];
    document.querySelector('#answerThree').innerHTML = answers[i][2];
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });

        $("label.btn").on('click',function () {

            if(i >= 3){
                document.querySelector('#questionText').innerHTML = results[Math.floor(Math.random()*3)];
                $('#quiz').hide();
            }else{
                $('#loadbar').show();
                $('#question').hide();
                $('#quiz').hide();
                i++;
                document.querySelector('#questionText').innerHTML = questions[i];
                document.querySelector('#answerOne').innerHTML = answers[i][0];
                document.querySelector('#answerTwo').innerHTML = answers[i][1];
                document.querySelector('#answerThree').innerHTML = answers[i][2];

                setTimeout(function(){
                    $('#question').show();
                    $('#quiz').show();
                    $('#loadbar').hide();
                }, 1000);
            }
        });
});

var questions = ["If you could genetically cross two animals to get the best of both, which would you choose?",
    "Why do you want to take over the world?",
    "If you saw an orange crossing the road, what would you do?",
    "If you had God powers for 30 minutes, you would"]

var answers = {
    0: ["A mouse and a dinosaur", "A penguin and a cat", "A lion and an eagle"],
    1: ["I got a bit bored watching Netflix", "I am the supreme being, and everyone shall bow to me", "The world is a sad place and needs my guidance"],
    2: ["I would take her hand and help her accross the road", "Grab it and make an orange juice", "Take a cold shower to wake up"],
    3: ["Make all pokemon real", "Predict the future and play at the casino", "Transfer all the gold and currency to my personal bank"]
}

var results = ["", "", ""];