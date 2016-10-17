
window.onscroll = function() {
    var scrolled = window.pageXOffset || document.documentElement.scrollLeft;
    //document.getElementById('showScroll').innerHTML = scrolled + 'px';
    
    var top = document.getElementById("top_line_content");
    
    if(scrolled >= window.innerWidth*0.825)
        {
            top.style.display = 'block';
            top.style.position = 'fixed';
            top.style.left = 100 + "px";
        }
    else
        {
            top.style.display = 'none';
        }
    console.log(scrolled);
}




var i = 0;
var array = ["Машины","Для дома","Игрушки","Косметика","Вещи"];
var tag_count = array.length;

function change_image() {
    
    document.getElementById("category_list").innerHTML = "<span class='category_tag'>" + array[i] + "</span>";
    
}

setInterval (function() {i+= 1; if (i+1>tag_count) i=0; change_image();}, 3000);



function to_view_click()
{
   
}
$(function() {

    var marquee = $("#marquee"); 
    marquee.css({"overflow": "hidden", "width": "100%"});

    // оболочка для текста ввиде span (IE не любит дивы с inline-block)
    marquee.wrapInner("<span>");
    marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" }); 
    marquee.append(marquee.find("span").clone()); // тут у нас два span с текстом

    marquee.wrapInner("<div>");
    marquee.find("div").css("width", "200%");

    var reset = function() {
        $(this).css("margin-left", "0%");
        $(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
    };

    reset.call(marquee.find("div"));

});