$(function(){
    var loading = $('#loadbar').hide();
    var i = 0;
    document.querySelector('#questionText').innerHTML = questions[i];
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });

        $("label.btn").on('click',function () {

            if(i >= 6){
                document.querySelector('#questionText').innerHTML = "Quiz Done";
                $('#quiz').hide();
            }else{
                var choice = $(this).find('input:radio').val();
                $('#loadbar').show();
                $('#question').hide();
                $('#quiz').hide();
                i++;
                document.querySelector('#questionText').innerHTML = questions[i];
                console.log(i);

                setTimeout(function(){
                    $('#answer').html($(this).checking(choice));
                    $('#question').show();
                    $('#quiz').show();
                    $('#loadbar').hide();
                }, 1500);
            }
        });

    $ans = 3;

    $.fn.checking = function(ck) {
        if (ck != $ans)
            return 'INCORRECT';
        else 
            return 'CORRECT';
    }; 
});

var questions = ["If you could genetically cross two animals to get the best of both, which would you choose?", "",
    "Why do you want to take over the world?", "",
    "If you saw an orange crossing the road, what would you do?", "",
    "If you had God powers for 30 minutes, you would"]
