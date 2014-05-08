(function () {
	"use strict";

	var options = {
		//this one will appear after lineLoader in DOM structure
		additionalAppend: '<div class="extraDiv"></div>',
	    onLoaderFinish: function() {
	    	//init application
        	app.init();
        },
        animationDuration: 400
	};

	//plugin init
	$("#loaderCanvas").simplePageLoader(options);


	/* mock page load */
	window.onload = function () {
		function moveBar () {
			$("#loaderCanvas").data("simplePageLoader").loader_counter.notify(8, moveBar);
		};
		$("#loaderCanvas").data("simplePageLoader").loader_counter.notify(40, moveBar);
	};
	/* end - mock page load */

	var app = function () {
		var that = app;

		that.init = function () {
			that.hideLoader();
		};

		that.hideLoader = function () {
			$('#loaderCanvas').fadeOut(200, function () {
				that.showOne();
			});
		};

		that.showOne = function () {
			$('#app .one').fadeIn(300, function () {
				that.showTwo();
			});
		}		

		that.showTwo = function () {
			$('#app .two').fadeIn(300, function () {
				that.showThree();
			});
		}

		that.showThree = function () {
			$('#app .three').fadeIn(300, function () {
				//that.showTwo();
			});
		}

	};

	app();

})();