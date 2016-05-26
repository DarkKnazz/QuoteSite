/**
 * Created by Евгений Крутов on 25.05.2016.
 */
$(document).ready(function(){
    var a = 1;
    var arr = new Array();
    arr[0] = "Больше доблести в том, чтобы словами убивать войны, чем железом — людей.";
    arr[1] = "Великая бездна сам человек, волосы его легче счесть,<br> чем его чувства и движения его сердца.";
    arr[2] = "В сердце матери моей, однако, Ты основал храм Свой…";
    arr[3] = "А когда мы смотрим внутрь себя, то не замечаем великого чуда?";
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