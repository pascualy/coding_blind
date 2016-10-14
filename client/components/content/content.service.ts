'use strict';
const angular = require('angular');


export function ContentService($window) {
  'ngInject';
  var Content = {
	"section" : '1.1',
	"title" : 'Math in Python',
	"header" : 'To the right is the Python interpreter. Any time you see this console to the right you can type in some Python code and hit enter and that code will run.\n\n Give it a try by typing in the year 2016 and subtracting out the year you were born. You should get your age (depending on if you\'ve had your birthday already, that is). For example, George Washington was born in 1732:',
	"hints" : ['hint1: think about how you would use a calculator to complete this challenge','hint2: try and use your brain. that may help'],
	"body" : 'blah blah blah blah ablah balha balahbalhsdhl asdlhf asdlhf',
	"example" : "2016 - 1799",
	"commands" : [ {
					"command":"2016 - 1732",
					"output":"284"
				},
				{
					"command":"2016 - 1732",
					"output":"284"
				}]
  };

  return Content;
}
