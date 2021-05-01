$(function(){

    $("#nav-link1").on('click', function(){
        $("#navToggle1").slideToggle(500);
    });
    $("#nav-link2").on('click', function(){
        $("#navToggle2").slideToggle(500);
    });
    $("#nav-link3").on('click', function(){
        $("#navToggle3").slideToggle(500);
    });
    $("#nav-link31").on('click', function(){
        $("#navToggle31").slideToggle(500);
    });
    $("#nav-link5").on('click', function(){
        $("#navToggle5").slideToggle(500);
    });

    $("#btn1").on('click', function(){
        $("#panel1").toggle(400);
    });

    $("#btn2").on('click', function(){
        $("#panel2").slideToggle(500);
    });

    $("#btn3").on('click', function(){
        $("#panel3").fadeToggle(300);
    });

    $("#btn4").on('click', function(){
        $("#panel4 .div-text").html('Ново съдържание');
    });

    $("#my_btn").on('click', function(){
        var clones = $(".list_item").clone();
        for(var i=0; i<clones.length; i++){
            $(clones[i]).text($(clones[i]).text()+"!");
        }
        $("#my_ordered_list").append(clones);
    });

    $("#exampleMouseOver").on('mouseover', function(){
        $("#printHere").replaceWith('<div id="printText1" style="color: red;"><p>Ново съдъражние в тази секция</p></div>');
    });
    //$("#exampleMouseOver").trigger('mouseover');
    
    $("#multipleEvents").on('scroll keypress', function(){
        alert("Току-що въведохте нещо от клавиатурата или приплъзнахте!");
    });

    $("#toggleClass-example").on('click', function(){
        $("#toggle").toggleClass("colorRed");
    });

    // $("#b1").on('click', function(){
    //     $("#box1").toggle();
    // });
    // $("#b2").on('click', function(){
    //     $("#box2").toggle();
    // });
    // $("#b3").on('click', function(){
    //     $("#box3").toggle();
    // });
    // $("#b4").on('click', function(){
    //     $("#box4").toggle();
    // });

    $(".buttons1").on('click', function(){
        var boxId = $(this).attr('data-boxId');
        $("#"+boxId).toggle();
    });

    console.log($(".li").first());
    console.log($(".li").eq(0));
    console.log($(".li").eq(1));
    console.log($(".ul:first").children());
    console.log($(".li:first").siblings());
    console.log($(".li:first").parent());
    console.log($(".li").eq(4).parent());
    console.log($(".li").eq(4).parent().parent());
    console.log($(".li").eq(4).parent().parent().prev());

    $("#DIV li").on('click', function(){
        $(this).next().remove();
    });

    $("#DIV1 li").on('click', function(){
        $(this).removeClass('special');
        $(this).siblings().addClass('special');
    });

    $("#DIV2 .list").on('click', function(){
        $(this).find('li').filter('.special').remove();
    });

    $("#DIV3 li").on('click', function(){
        $(this).hide();
        if($(this).is('.special')){
            alert("It was special.");
        }
    });

    $("#ajaxExampleButton").click(function(){
        $("#ajaxExampleDiv").load("demo_test.txt");
    });



});


$(document).ready(function() {

    $("#my_div").click(function() {
       alert("Hello, world!");
    });
 });




 