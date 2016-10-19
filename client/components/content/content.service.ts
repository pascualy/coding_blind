'use strict';
const angular = require('angular');


export function ContentService($window, $routeParams) {
  'ngInject';
  

  var Content = [{
		"lesson" : '1.1',
		"title" : 'Math in Python',
		"header" : '',
		"hints" : [`This problem has been coded for you in the Python interpreter!
					To view the code, click on the right side of the screen and use the arrow keys to navigate
					through the lines of code. The line you are on will be automatically be read to you.`],
		"body" : `Let's start  with a simple math problem! Programming languages are excellent	
					for doing math because of their incredible speed. You can use the plus, dash, asterisk, or slash keys to do the 
					four basic math operations: addition, subtraction, multiplication, and division.
					Let's say we wanted to know what ten times twenty was. We could simply type the line print 10 * 20. 
					The line of code for this problem has already been written for you in the coding area. It reads "print 10 * 20."
					Now press alt W to hear the hint for the problem.`,
		"example" : "",
		"commands" : [{
						"command":"print 10 * 20",
						"output":"200"
					}]
		},
		{
		"lesson" : '1.2',
		"title" : 'Variables in Python',
		"header" : '',
		"hints" : [''],
		"body" : `For this lesson let's say we were doing a longer math problem and 10 * 20 was one of our intermediate steps. 
					We could assign the result of 10 * 20 to a variable and then print to the screen. Think of a variable 
					as a holding place for a piece of information. If needed we can change what the piece of information 
					that the variable holds as we go. We can call this variable whatever we want, but in this problem, 
					let's just call it the word result. For this problem in one line set a variable equal to 10 times 20 then
					in the next line print that variable. Press alt e to go to the example to see how to use a variable.`,
		"example" : "",
		"commands" : [{
						"command":"result = 1 + 2\nprint result",
						"output":"3"
					}]
		}];

  return Content;
}
