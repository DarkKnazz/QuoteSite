/**
 * Created by Евгений Крутов on 25.05.2016.
 */
$(document).ready(function(){
    var a = 1;
    var arr = new Array();
    arr[0] = "А по-вашему, только тот поэт, кто печатает свои стихи?";
    arr[1] = "Банальность — прибежище слабого.";
    arr[2] = "Безденежье, говорят, болезнь не смертельная,<br> но излечить от нее может только один врач: сам больной.";
    arr[3] = "Богатство без чести — это уродство.";
    arr[4] = "Брак — это война между мужчиной и женщиной, победителю достается свобода.";
    var maxLen = arr.length;
    var button = document.getElementById("Button1");
    button.onclick = function(){
        $("#id1").animate({left:"-1000px"}, 500);
        $("#id1").animate({opacity:"0"}, 0.5);
        var text = document.getElementById("id1");
        text.innerHTML = arr[a];
        $("#id1").animate({left:"1000px"}, 0.5);
        $("#id1").animate({opacity:"1"}, 0.5);
        $("#id1").animate({left:"0px"}, 500);
        a++;
        if(a == maxLen)
            a = 0;
    }
});