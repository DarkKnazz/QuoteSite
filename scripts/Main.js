/**
 * Created by Евгений Крутов on 06.02.2016.
 */

$(document).ready(function(){
    var a = 0;
    $("select").hide(0.00001);
    $("#list").click(function(){
        if(a == 0)
        {
            $("select").fadeIn("slow");
            a = 1;
        }
        else
        {
            $("select").fadeOut("slow");
            a = 0;
        }
    });
});