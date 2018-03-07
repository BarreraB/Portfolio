$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});
var hamburger = $('#nav-icon');
var mNav = $('.nav-links');


function dropDown(){
	var status = mNav.hasClass('active');

	if (!status) {
		mNav.addClass('active');
	} else {
		mNav.removeClass('active');
	}

}
$('#nav-icon').click(dropDown);