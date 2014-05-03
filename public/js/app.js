(function () {
	"use strict";

	var options = {
		//this one will appear after lineLoader in DOM structure
		additionalAppend: '<div class="extraDiv"></div>'
	}

	//plugin init
	$("#loaderCanvas").simplePageLoader(options);

})();