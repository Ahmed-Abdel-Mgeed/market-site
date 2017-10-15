$(function() {
	'use strict';
	// Links Add Active Class

	$('.links li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	});

	// Addjuste Header Height
	var myHeader = $('.head-image');

	myHeader.height($(window).height());

	$(window).resize(function(){
		myHeader.height($(window).height());
	});


});

//Google maps api

	function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }