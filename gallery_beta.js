// JavaScript Document
$(document).ready(function(e) {
    	$(".largeImg [id ^= 'large']").hide();
    	$(".largeImg [id ^= 'comment']").hide();
		$(".reviews [id ^= 'comment']").hide();
	$('.my-parts').hide();
});
$('.my-parts').click(function(e) {
    	$(".largeImg [id ^= 'large']").hide();
    	$(".largeImg [id ^= 'comment']").hide();
	$('.my-parts').hide();
	$('.swiper-wrapper').show();
	var windowWidth = $(window).width();
	var widthBPoint = 760;
	if (windowWidth > widthBPoint) {
		$('#sidenavi').show();
	}
});
$('.my-parts').click(function(e) {
    	$(".largeImg [id ^= 'large']").hide();
    	$(".largeImg [id ^= 'comment']").hide();
	$('.my-parts').hide();
	$('.swiper-wrapper').show();
	var windowWidth = $(window).width();
	var widthBPoint = 760;
	if (windowWidth > widthBPoint) {
		$('#sidenavi').show();
	}
});

$('.gallerytable').click(function(e) {
	$('.my-parts').show();
	$('.swiper-wrapper').hide();
	$('#sidenavi').hide();
});
$('#small1').click(function(e) {
	$('#large1').show();
	$('#comment1').show();
	$('.my-parts').show();
	$('.swiper-wrapper').hide();
});
$('#small2').click(function(e) {
	$('#large2').show();
	$('#comment2').show();
	$('.my-parts').show();
	$('.swiper-wrapper').hide();
});
$('#small3').click(function(e) {
	$('#large3').show();
	$('#comment3').show();
	$('.my-parts').show();
	$('.swiper-wrapper').hide();
});
$('#small4').click(function(e) {
	$('#large4').show();
	$('#comment4').show();
	$('.my-parts').show();
	$('.swiper-wrapper').hide();
});
$('#small5').click(function(e) {
	$('#large5').show();
	$('#comment5').show();
	$('.my-parts').show();
	$('.swiper-wrapper').hide();
});
$('#small6').click(function(e) {
	$('#large6').show();
	$('#comment6').show();
	$('.my-parts').show();
	$('.swiper-wrapper').hide();
});
$('#small7').click(function(e) {
	$('#large7').show();
	$('#comment7').show();
	$('.my-parts').show();
	$('.swiper-wrapper').hide();
});
$('#small8').click(function(e) {
	$('#large8').show();
	$('#comment8').show();
	$('.my-parts').show();
	$('.swiper-wrapper').hide();
});
$('#small9').click(function(e) {
	$('#large9').show();
	$('#comment9').show();
	$('.my-parts').show();
	$('.swiper-wrapper').hide();
});
$('#small10').click(function(e) {
	$('#large10').show();
	$('#comment10').show();
	$('.my-parts').show();
	$('.swiper-wrapper').hide();
});
$('#small11').click(function(e) {
	$('#large11').show();
	$('#comment11').show();
	$('.my-parts').show();
	$('.swiper-wrapper').hide();
});
$('#small12').click(function(e) {
	$('#large12').show();
	$('#comment12').show();
	$('.my-parts').show();
	$('.swiper-wrapper').hide();
});

//ギャラリージャンプ

$('#back2').click(function(e){
	$('#large1').show();
	$('#comment1').show();
	$('#comment2').hide();
	$('.my-parts').show();
	$('#large2').hide();
});
$('#back3').click(function(e){
	$('#large2').show();
	$('#comment2').show();
	$('#comment3').hide();
	$('.my-parts').show();
	$('#large3').hide();
});
$('#back4').click(function(e){
	$('#large3').show();
	$('#comment3').show();
	$('#comment4').hide();
	$('.my-parts').show();
	$('#large4').hide();
});
$('#back5').click(function(e){
	$('#large4').show();
	$('#comment4').show();
	$('#comment5').hide();
	$('.my-parts').show();
	$('#large5').hide();
});
$('#back6').click(function(e){
	$('#large5').show();
	$('#comment5').show();
	$('#comment6').hide();
	$('.my-parts').show();
	$('#large6').hide();
});
$('#back7').click(function(e){
	$('#large6').show();
	$('#comment6').show();
	$('#comment7').hide();
	$('.my-parts').show();
	$('#large7').hide();
});
$('#back8').click(function(e){
	$('#large7').show();
	$('#comment7').show();
	$('#comment8').hide();
	$('.my-parts').show();
	$('#large8').hide();
});
$('#back9').click(function(e){
	$('#large8').show();
	$('#comment8').show();
	$('#comment9').hide();
	$('.my-parts').show();
	$('#large9').hide();
});
$('#back10').click(function(e){
	$('#large9').show();
	$('#comment9').show();
	$('#comment10').hide();
	$('.my-parts').show();
	$('#large10').hide();
});
$('#back11').click(function(e){
	$('#large10').show();
	$('#comment10').show();
	$('#comment11').hide();
	$('.my-parts').show();
	$('#large11').hide();
});
$('#back12').click(function(e){
	$('#large11').show();
	$('#comment11').show();
	$('#comment12').hide();
	$('.my-parts').show();
	$('#large12').hide();
});
$('#next1').click(function(e) {
	$('#large2').show();
	$('#comment2').show();
	$('#comment1').hide();
	$('.my-parts').show();
	$('#large1').hide();
});
$('#next2').click(function(e) {
	$('#large3').show();
	$('#comment3').show();
	$('#comment2').hide();
	$('.my-parts').show();
	$('#large2').hide();
});
$('#next3').click(function(e) {
	$('#large4').show();
	$('#comment4').show();
	$('#comment3').hide();
	$('.my-parts').show();
	$('#large3').hide();
});
$('#next4').click(function(e) {
	$('#large5').show();
	$('#comment5').show();
	$('#comment4').hide();
	$('.my-parts').show();
	$('#large4').hide();
});
$('#next5').click(function(e) {
	$('#large6').show();
	$('#comment6').show();
	$('#comment5').hide();
	$('.my-parts').show();
	$('#large5').hide();
});
$('#next6').click(function(e) {
	$('#large7').show();
	$('#comment7').show();
	$('#comment6').hide();
	$('.my-parts').show();
	$('#large6').hide();
});
$('#next7').click(function(e) {
	$('#large8').show();
	$('#comment8').show();
	$('#comment7').hide();
	$('.my-parts').show();
	$('#large7').hide();
});
$('#next8').click(function(e) {
	$('#large9').show();
	$('#comment9').show();
	$('#comment8').hide();
	$('.my-parts').show();
	$('#large8').hide();
});
$('#next9').click(function(e) {
	$('#large10').show();
	$('#comment10').show();
	$('#comment9').hide();
	$('.my-parts').show();
	$('#large9').hide();
});
$('#next10').click(function(e) {
	$('#large11').show();
	$('#comment11').show();
	$('#comment10').hide();
	$('.my-parts').show();
	$('#large10').hide();
});
$('#next11').click(function(e) {
	$('#large12').show();
	$('#comment12').show();
	$('#comment11').hide();
	$('.my-parts').show();
	$('#large11').hide();
});
