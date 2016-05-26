/**
 * Created by Евгений Крутов on 25.05.2016.
 */
$(document).ready(function(){
    var a = 1;
    var arr = new Array();
    arr[0] = "Оскорбление является обычной наградой за хорошую работу.";
    arr[1] = "Тот, кто любит, должен разделять участь того, кого он любит.";
    arr[2] = "Успевает всюду тот, кто никуда не торопится.";
    arr[3] = "Человек без сюрприза внутри, в своем ящике, неинтересен.";
    arr[4] = "Праздничную полночь иногда приятно и задержать.";
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