$(document).ready(function() {
    $('a').hover(
        function() {
            $(this).css('color', 'red').css('font-style', 'italic');
        },
        function() {
            $(this).css('color', 'black').css('font-style', 'normal');
        }
    );
});
