$(document).ready( function() {

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

		/* Slide Down For Divs

		$("#home").on({
			mouseenter:function() {
			$(".movie").fadeIn(1500)
			}
		});


		$("#about").on({
			mouseenter:function() {
			
			}
		});

		$("#shopping").on({
			mouseenter:function() {
			
			}
		});
		*/

		//  Animate My Page

		$("body").animate({
			top:'0'
		},4000);

		$(".main .to-use").animate({
			width:'91%'
		},6500,function() {
				$('iframe').fadeIn(2600)
				$('ul').fadeIn()
				$("p").fadeIn();
			});
		

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