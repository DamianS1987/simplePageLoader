(function () {
	"use strict";

	var options = {
		//this one will appear after lineLoader in DOM structure
		additionalAppend: '<div class="extraDiv"></div>',
	    onLoaderFinish: function() {
        	alert('hurray the page loaded')
        }
	};

	//plugin init
	$("#loaderCanvas").simplePageLoader(options);

})();