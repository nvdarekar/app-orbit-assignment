$(document).ready(function(){
    $('.menu-list a').click(function(){
        $('.menu-list a').css('color', 'white');
        $('.menu-list li').css('background', '#191211');
        $(this).css('color', 'black');
        $(this).children().css('background', 'white');
    });
    $(".menu-list a:first" ).trigger( "click" );
});