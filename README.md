> Simple Page Loader
> ================

The Simple Page Loader plugin provides you with a loading bar with additional api for you.

In your project you only have to add  "div" element with `id = "loaderCanvas"`, with "div child element `class="lineLoader"`,  and with "div child element `class="lineColor"`.

	<div id="loaderCanvas">
		<div class="lineLoader">
			<div class="lineColor"></div>
		</div>
	</div>

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

simply pass the options objject to the init method.

E.g.:

    var options = {
	//this one will appear after lineLoader in DOM structure
	additionalAppend: '<div class="extraDiv"></div>',
	onBarMoveSwitch: false,
	animDurationOnResolve: 1000
    }

As soon as the bar reaches 100 or above "resolve" is called and loader finishes it's work.

    //plugin init
    $("#loaderCanvas").simplePageLoader(options);

    //callback on notify - after a change
    $("#loaderCanvas").data("simplePageLoader").loader_counter.notify(40, function () {
      console.log('my callback');
    });

To run the examples from the example folder run a server.

> ================
> Bower

Bower package name is `simplePageLoader`.
Run `bower info simplePageLoader` to list the available versions.
Run `bower install simplePageLoader` to install the package with exmples.

> ================
[Stefan Gabson's boilerplate ](http://stefangabos.ro/jquery/jquery-plugin-boilerplate-revisited/)has been used to create this plugin.
