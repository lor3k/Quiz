$( document ).ready(function() {
    var i = 0;
    var k = 0;
$(".start").on("click", function(){

        if ($(this).hasClass("a")) {
            k++;
        }

        $("#tresc").hide();
        $(this).hide();
        $("#czas").show();

    if (i<10) {
        $("#id" + i).hide();
        i++;
        $("#quizFrame").prepend($("#id" + i));
        $("#id" + i).show();
    }
    else {
        $("#czas").hide();
        $("#id" + i).hide();
        $(".start").hide();
        $("#quizFrame").prepend("Koniec<br><br>Dziękuję za udział w quizie!<br>Twój wynik to " + k + "!");
    }
});
})