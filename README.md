simplePageLoader
================

The Simple Page Loader plugin provides you with a loading bar with additional api for you.
In your project you only have to add  "div" element with id = "loaderCanvas". I've used Stefan Gabson's boilerplate for plugin creating,
so you can follow his advice how to modify the plugin yourself.

To modify the default options of the plugin:

var defaults = {
    //activate callback function after each bar animation
    onBarMoveSwitch: true,
    onBarMove: function () {
    	console.log('bar finished its move!');
    },

    //activate callback function after the last bar move
    finishCallbackSwitch: true,
    onLoaderFinish: function() {
    	console.log('hurray the page loaded')
    },

    // elements appended to the loader
	html: '<div class="lineLoader"><div class="lineColor"></div></div>',

	//append additional elements to the page
	additionalAppend: "",

	// animation duration on resolve
	// final animation duration of the bar
	animDurationOnResolve: 3000	   
};

simply pass the options object to the init method.

E.g.:

var options = {
	//this one will appear after lineLoader in DOM structure
	additionalAppend: '<div class="extraDiv"></div>',
	onBarMoveSwitch: false,
	animDurationOnResolve: 1000
}

//plugin init
$("#loaderCanvas").simplePageLoader(options);

The main function initiating the bar line is "notify" which updates the lines lenght by 1.
All of the API for the plugin is available in the specified element's data - $("#loaderCanvas").data("simplePageLoader").
e.g.:
$("#loaderCanvas").data("simplePageLoader").loader_counter.notify();

You may add an argument to the function and update it by any number.
e.g.:
$("#loaderCanvas").data("simplePageLoader").loader_counter.notify(33);

As soon as the bar reaches 100 or above "resolve" is called and loader finishes it's work.