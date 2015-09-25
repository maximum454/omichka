$(function(){

	$('.bx-slider').bxSlider();
	// для медия
	  var $container = $('#media');
		// Инициализация
		$container.masonry({
		  columnWidth: 310,
		  itemSelector: '.media-item',
		  gutter: 15
		});
		var $container = $('#media');
		// Инициализация Масонри, после загрузки изображений
		$container.imagesLoaded( function() {
		  $container.masonry();
		});
		// end media
	bxarena =$('.bxarena').bxSlider({
		auto:0,
		pager:1,
		controls:1,
		nextSelector: '.next-arena',
  		prevSelector: '.pre-arena',
  		pagerSelector:'.b-count'
	});
	slideQty = bxarena.getSlideCount();

	$(".tabs").lightTabs();

		
		
	$('.popap_box').click(function() {
		$('#modalbox_' + $(this).data('body')).arcticmodal();
	});
})