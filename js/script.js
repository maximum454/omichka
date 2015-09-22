$(function(){

	$('.bx-slider').bxSlider();

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