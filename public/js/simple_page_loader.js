
/*
Simple Page Loader Plugin

Author: Damian Stefaniak
Website: dstefaniak.co.uk
Github: https://github.com/DamianS1987

Copyright (C) 2014

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, 
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// jQuery Plugin Boilerplate
// A boilerplate for jumpstarting jQuery plugins development
// version 1.1, May 14th, 2011
// by Stefan Gabos

(function($) {
	"use strict";
    $.simplePageLoader = function(element, options) {

        var defaults = {
            foo: 'bar',
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
	    	animDurationOnResolve: 3000	   
        };

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            // code goes here
            elementAppend();
        }

        var elementAppend = function() {
             $('#loaderCanvas').append(plugin.settings.html);
             //if addtional append exists append it to the loader

             if (plugin.settings.additionalAppend !== "") {
             	$('#loaderCanvas').append(plugin.settings.additionalAppend);
             }
        }

	    /**************/
	    /* Make Progessive changes to elements */
	    function progressLine (endBarMove) {

	        $('.lineColor').animate({
	          width: $.loader_no + "%"
	        }, plugin.settings.animDurationOnResolve , function () {

	          if ( plugin.settings.onBarMoveSwitch && !endBarMove) {
	            plugin.settings.onBarMove();
	          } else if ( plugin.settings.finishCallbackSwitch && !!endBarMove ) {

	          	plugin.settings.onLoaderFinish();
	          }
	        });
	    }
	    /***************/
	    function asyncEvent() {
	      //counts the movement of the loader
	      //make the method public
	      plugin.loader_counter = new $.Deferred();
	      $.loader_no = 0;
	      return  plugin.loader_counter.promise();
	    }

	    /***************/
	    // Attach a done, fail, and progress handler for the asyncEvent
	    $.when( asyncEvent() ).then(
	      //resolve
	      function( status ) {

	        //update animation
	        $.loader_no = 100;
	        //add true, saying that it's the last animation of the bar
	        progressLine(true);

	      },
	      //error - refuse
	      function( status ) {
	        alert( "error: " + status + ", you fail this time. Reload the page." );
	      },
	      function( status ) {
	        $.loader_no++;

	        if (!!status) {
	          $.loader_no += status;
	          progressLine();

	        } else {
	          progressLine();    
	        }

	        if ( $.loader_no >= 100 ) {
	          plugin.loader_counter.resolve();
	        }
	      }
	    );
	    /*****************/

        plugin.init();

    }

    $.fn.simplePageLoader = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('simplePageLoader')) {
                var plugin = new $.simplePageLoader(this, options);
                $(this).data('simplePageLoader', plugin);
            }
        });
    }
})(jQuery);