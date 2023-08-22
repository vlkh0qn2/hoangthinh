// JavaScript Document

$('#btn-menu').click(function(){
	$('.main-nav').toggle('slide',500);
})
$('#btn-close').click(function(){
	$('.main-nav').toggle('slide',500);
})

//$(window).ready(function(){
//	var vh=$(window).height();
//	$('.sidebar').height(vh)
//})

$('#btn-sidebar-close').click(function(){
	$('.sidebar').toggle('slide',500);
})

$('#btn-sidebar').click(function(){
	$('.sidebar').toggle('slide',500);				
})

$(document).ready(function () {
                            $("#slider").ezPlus({
                                gallery: 'gallery_01',
                                cursor: 'pointer',
                                galleryActiveClass: "active",
                                imageCrossfade: true,
                                loadingIcon: "https://www.elevateweb.co.uk/spinner.gif"
                            });

                            $("#slider").bind("click", function () {
                                var ez = $('#slider').data('ezPlus');
                                ez.closeAll(); //NEW: This function force hides the lens, tint and window
                                $.fancyboxPlus(ez.getGalleryList());
                                return false;
                            });

                        });

$('#btn-plus').click(function(){
	var quanty=$('#quanty').val();
	quanty=parseInt(quanty,10);
	quanty=quanty+1;
	$('#quanty').val(quanty)
})

$('#btn-minus').click(function(){
	var quanty=$('#quanty').val();
	quanty=parseInt(quanty,10);
	quanty=quanty-1;
	if(quanty<1)
		quanty=1;
	$('#quanty').val(quanty)
})

