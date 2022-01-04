$('.filter-handler').click(function(){
    
    var $wrapper = $('.figures .section-content');

    $wrapper.find('.image-card').sort(function (b, a) {
        return +a.dataset.order - +b.dataset.order;
    })
    .appendTo( $wrapper ); 
    
})
/*
$('.praktyka').click(function(){
    $('.praktyka-content', this).slideDown();
    $(this).addClass('opened');
})
*/

$('.praktyka h4').click(function(){
	//$('.praktyka-content', this).slideUp();
	$(this).parent().find('.praktyka-content').slideToggle();
	$(this).parent().toggleClass('opened');
})

$('.popup').delay(2000).fadeIn();
$('.popup .close').click(function(){
	//$('.praktyka-content', this).slideUp();
	$('.popup').fadeOut();
})

$(document).on('ready', function() {
  
 
    $(".fiza1").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
   
  });