/**
 * Created by Евгений Крутов on 25.05.2016.
 */
$(document).ready(function(){
    var a = 1;
    var arr = new Array();
    arr[0] = "Какое чудо — восхищаться в живописи тем, чем в реальности не восхищаешься!";
    arr[1] = "Лень, конечно, — наибольшая помеха к развитию наших способностей.";
    arr[2] = "Никогда не бываешь многословным, если говоришь именно то, что хочешь сказать.";
    arr[3] = "Самый смелый человек становится трусом, когда у него нет установившихся взглядов.";
    arr[4] = "У большинства людей ум остается запущенной почвой почти в течение всей жизни.";
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