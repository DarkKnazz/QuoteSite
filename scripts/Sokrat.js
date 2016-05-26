/**
 * Created by Евгений Крутов on 25.05.2016.
 */
$(document).ready(function(){
    var a = 1;
    var arr = new Array();
    arr[0] = "Кто хочет сдвинуть мир, пусть сдвинет себя!";
    arr[1] = "В каждом человеке есть солнце. Только дайте ему светить.";
    arr[2] = "Добрым людям следует доверяться словом и разумом, а не клятвой.";
    arr[3] = "Как много есть на свете вещей, которые мне не нужны!";
    arr[4] = "Без дружбы никакое общение между людьми не имеет ценности.";
    arr[5] = "Есть одно только благо — знание и одно только зло — невежество.";
    arr[6] = "Хорошее начало не мелочь, хоть начинается с мелочи.";
    arr[7] = "Людям легче держать на языке горячий уголь, чем тайну.";
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
