/**
 * Created by Евгений Крутов on 25.05.2016.
 */
$(document).ready(function(){
    var a = 1;
    var arr = new Array();
    arr[0] = "Если вы говорите только правду, вам не нужно ни о чем помнить.";
    arr[1] = "Люди, у которых свое горе, умеют утешать других.";
    arr[2] = "Человек бьл создан в последний день творения, когда Бог уже утомился.";
    arr[3] = "Настоящий друг с тобой, когда ты не прав. Когда ты прав, всякий будет с тобой.";
    arr[4] = "Каждый человек, подобно луне, имеет свою неосвещенную сторону,<br> которую он никому не показывает.";
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