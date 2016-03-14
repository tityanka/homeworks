$(document).ready(function() {


    // $('a').click(function(){
    // 	$('.hidden').toggleClass('display');
    // 	$(this).text('<<< hide').click(function(){
    // 		$(this).text('read more >>>');
    // 	});


    $('a').click(function() {
        $('.hidden').toggle();
        $(this).text('<<< hide').click(function() {
            $(this).text('read more >>>');
        });
    });

});
