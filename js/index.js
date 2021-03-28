/*$(document).ready(function(){
	$('.mob_ham_btn').click(function(){
		$('.gnb').slideToggle();
	});
});*/
$('.mob_ham_btn').click(function(){
	$('.gnb').stop().slideToggle();
});
$('.slider_images').bxSlider({
	mode: 'horizontal',
	auto: true,
	pause: 3000
});