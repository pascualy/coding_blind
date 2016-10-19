'use strict';
const angular = require('angular');


export function ShortcutsService($window) {
  'ngInject';
	return function(element) {
	    var map = {9: false, 16: false};

	    element.bind("keydown", function(event) {
	        if (event.which in map) {
	            map[event.which] = true;
	            if (map[9] && map[16]) {
	                // scope.$apply(function(){
	                //     scope.$eval(attrs.ngShiftTab, {'event': event});
	                // });
	                // event.preventDefault();
	            }
	        }
	    });
	    element.bind("keyup", function(event) {
	        if (event.which in map) {
	            map[event.keyCode] = false;
	        }
	    });
	};
}
