$(function(){

	$('.bx-slider').bxSlider();

	$('.popap_box').click(function() {
		$('#modalbox_' + $(this).data('body')).arcticmodal();
	});
})