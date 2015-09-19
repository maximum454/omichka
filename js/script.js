$(function(){

	$('.bx-slider').bxSlider();

	$("ul.tabs").tabs("div.panes > div");

	$('.popap_box').click(function() {
		$('#modalbox_' + $(this).data('body')).arcticmodal();
	});
})