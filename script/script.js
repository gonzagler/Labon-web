jQuery('.scrollbar-inner').scrollbar();
    jQuery.fn.exists = function(){return this.length>0;}
    
    
   

    var ss = document.getElementById("middle_stroke");
    var ss1 = document.getElementById("top_stroke");
    var ss2 = document.getElementById("bottom_stroke");
    var height = ss.style.height;

    function getProd(ss, id) {
        return '<div class = "block" id="b_ss_' + ss + '_' + id + '" data-ss = "' + ss + '" data-id = "' + id + '"><div class="textCont" ><div class = "greyBg" id="gBg_' + ss + '_' + id + '" data-ss = "' + ss + '" data-id = "' + id + '"></div><div class = "nameBlock" id="nB_' + ss + '_' + id + '">Name</div><div class = "descrBlock"id="dB_' + ss + '_' + id + '">Description</div></div><img class= "image" src="http://velosvit.com.ua/decor/coach/1920-Wastyn-Special.jpg" data-ss = "' + ss + '" data-id = "' + id + '" ></div>';
    }


      for (var i = 0; i < 10; i++) {


        ss.innerHTML += getProd(0, i);
        ss1.innerHTML += getProd(1, i);
        ss2.innerHTML += getProd(2, i);
    }
   
    
    
    function setStrokeWidth()
    {
        var wss = 0;
        var wss1 = 0;
        var wss2 = 0;
        
        
        var i = 0;
        while($("#b_ss_0_" + i).exists())
            {
                wss += $("#b_ss_0_" + i).width();
                wss1 += $("#b_ss_1_" + i).width();
                wss2 += $("#b_ss_2_" + i).width();
                
                i++;
            }
        
        
        $("#merch_wrapper").width(Math.max(wss, wss1, wss2));
    }



    $(".block").click(function (event) {
        
       
        $('html, body').animate({
            scrollLeft: ($(this).position().left - ($( window ).width()/2) + ($(this).width()/2))
        }, 500);
        
        $(".popupPage").css("display", "block");
    });

       
    $(document).mouseup(function (e)
                        {
        var container = $(".popupWindow");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(".popupPage").css("display", "none");
        }
    });



    $(document).on('mouseenter', '.image', function (event) {

        elem1 = "#nB_" + $(event.target).data("ss") + "_" + $(event.target).data("id");
        elem2 = "#dB_" + $(event.target).data("ss") + "_" + $(event.target).data("id");
        elem3 = "#gBg_" + $(event.target).data("ss") + "_" + $(event.target).data("id");


        
        



    }).on('mouseleave', '.greyBg', function (event) {
        elem1 = "#nB_" + $(event.target).data("ss") + "_" + $(event.target).data("id");
        elem2 = "#dB_" + $(event.target).data("ss") + "_" + $(event.target).data("id");
        elem3 = "#gBg_" + $(event.target).data("ss") + "_" + $(event.target).data("id");




    });

    $(function () {

        $("html,body").mousewheel(function (event, delta) {

            $('html, body').finish();
            if ($(".popupPage").css('display') == 'none')
                this.scrollLeft -= (delta * 60);

            event.preventDefault();

        });

    });
    
    
   
    
    
     window.onload = function(){
    setStrokeWidth();
		 
		 $(".button_sign").click(function(){
			$(".log_in").slideToggle(600);
		});
  }


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
var array = ["МАШИНЫ","ДЛЯ ДОМА","ИГРУШКИ","КОСМЕТИКА","ОДЕЖДА", "ЧТО-ТО ЕЩЕ", "ТЕЛЕФОНЫ", "СТРОИТЕЛЬСТВО", "УЧЕБА"];
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
