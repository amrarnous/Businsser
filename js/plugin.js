$(function (){
      	// Scroll-Top // 
  	var buttonUp = $(".scroll");
  	$(window).scroll(function(){

  		console.log($(this).scrollTop() );

  		$(this).scrollTop() >= 2191 ? buttonUp.fadeIn() :buttonUp.fadeOut(1000);
  	});
    // Button when Click
    buttonUp.click(function (){
    $("html,body").animate({scrollTop : 0},800);
    });
      // Screen Loading // 
  $(window).load(function(){
  	$(".sk-cube-grid .sk-cube").fadeOut(3000,                                 
    function(){
    $("body").css("overflow","auto");
    $(this).parent().fadeOut(1000,
    function (){
        $(this).remove();
    });
    });
  });
});