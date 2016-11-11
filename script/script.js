window.onscroll = function() {
    var scrolled = window.pageXOffset || document.documentElement.scrollLeft;
    
    
    var top = document.getElementById("top_line_content");
    var bottom = document.getElementById("bottom_line_content");
 //   var bottom = $("bottom_content");
    var green_separator_position = $("#green_separator").offset().left;
    
    //console.log(scrolled + "");
    
    
    if(scrolled > green_separator_position  )
        {
            
            top.style.display = 'block';
            top.style.position = 'fixed';
            top.style.left = 10 + "vw";
            
            bottom.style.display = "block";
            bottom.style.position = "fixed";
            bottom.style.left = 0 + "px";
            if(!bottom.classList.contains("show_menu_item"))
                bottom.className = "show_menu_item";
            
            
        }
    else
    {
        if(!bottom.classList.contains("hide_menu_item"))
        bottom.className = "hide_menu_item";
            top.style.display = 'none';
            //bottom.style.display = 'none';
            
            
            
        }
    
}




var i = 0;
var array = ["МАШИНЫ","ДЛЯ ДОМА","ИГРУШКИ","КОСМЕТИКА","ОДЕЖДА", "ЧТО-ТО ЕЩЕ", "ПОЧТИ ПОСЛЕДНЕЕ", "ПОСЛЕДНЕЕ", "САМОЕ ПОСЛЕДНЕЕ"];
var tag_count = array.length;

function change_image() {
    
    document.getElementById("category_list").innerHTML = "<span class='category_tag'>" + array[i] + "</span>";
    document.getElementById("category_list").innerHTML += "<span class='category_tag'>" + array[i+1] + "</span>";
    document.getElementById("category_list").innerHTML += "<span class='category_tag'>" + array[i+2] + "</span>";
    
}

setInterval (function() {i+= 3; if (i+3>tag_count) i=0; change_image();}, 3000);



$(function () {

    $("#arrow_on_green").click(function (event, delta) {
        
        
        
        $('html, body').animate({scrollLeft: ($("#content").position().left - $("#green_separator").width())}, 500);
        
        //this.scrollLeft = $("#content").position().left;

        event.preventDefault();

    });

});


function showProdPage(prodId)
{
    
    

};


	$(window).load(function(){
		
	});



/*$(function() {

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

});*/