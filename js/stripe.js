$(document).ready(function() {
    $('#blur').hide();
    $('.information_clickbutton').click(function(){
        $('#information').toggleClass('active');
        if($('#information').hasClass('active')){
                $('#blur').show();
                $('body').css({"overflow-y":"hidden"});
                                                 
            }
        else{
            $('#blur').hide();
            $('body').css({"overflow-y":"auto"});
        }
    });
    $('#burger_menu').click(function(){
        $('#slide').toggleClass('active');
        if($('#slide').hasClass('active')){
            $('#blur').show();
            $('body').animate({ left: '45vw'}, 400);
            $('#information').hide();
            $('body').css({"overflow-y":"hidden"});
        }
        else{
            $('#information').show();
            $('#blur').hide();
            $('body').css({"left":"0"});
            $('body').css({"overflow-y":"auto"});
        }
    });
    $('#blur').click(function(){
        $('body').css({"overflow-y":"auto"});
        $('#information').show();
        $('#slide').removeClass('active');
        $('#information').removeClass('active');
        $(this).hide();
        $('body').animate({ left: '0px'}, 400);
    });
});