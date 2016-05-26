/**
 * Created by ≈вгений  рутов on 25.05.2016.
 */
$(document).ready(function(){
    var a = 1;
    var arr = new Array();
    arr[0] = "»здевающийс€ над ближним издеваетс€, однако, и над самим собой.";
    arr[1] = "¬ысшее, к чему может стремитьс€ человеческа€ мысль, Ч <br>это выйти за свои собственные пределы, прид€ к парадоксу.";
    arr[2] = "Ќаслаждение не в том, что € вкушаю, а в том, чтобы получить желанное.";
    arr[3] = "„еловек всегда надеетс€ на то, что ему следовало бы вспомнить,<br> и вечно вспоминает то, на что ему следовало бы наде€тьс€.";
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