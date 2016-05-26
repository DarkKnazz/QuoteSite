/**
 * Created by Евгений Крутов on 25.05.2016.
 */
$(document).ready(function(){
    var a = 1;
    var arr = new Array();
    arr[0] = "В минуты высшего напряжения всего заметнее растет человек.";
    arr[1] = "Искусство — могучее средство исправления людского несовершенства.";
    arr[2] = "Правдивость — это дыхание жизни, это основа всякого достоинства.";
    arr[3] = "Истинная страсть молчалива.";
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