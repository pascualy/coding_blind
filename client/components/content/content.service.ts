'use strict';
const angular = require('angular');


export function ContentService($window, $location, $routeParams) {
  'ngInject';
  console.log("hellllll");
  console.log($routeParams.lesson);
  var lesson = parseInt($routeParams.lesson) - 1;
  var section = parseInt($routeParams.section) - 1;

  if (lesson != 0 || section != 0){
  	console.log('hchasdf')
  	$location.path( "/" );
  	return false;
  }

  var lessons = [ [{
		"lesson" : '1.1',
		"title" : 'Python Basics',
		"header" : '',
		"hints" : ['Press alt R to run the code'],
		"body" : `Let's start  with a simple math problem! Programming languages are excellent	
					for doing math because of their incredible speed. You can use the plus, dash, asterisk, or slash keys to do the 
					four basic math operations: addition, subtraction, multiplication, and division.
					Let's say we wanted to know what ten times twenty was. We could simply type in 10 * 20 and press enter.
					However, let's say we were doing a long math problem and 10 * 20 was one of our intermediate steps. 
					We could assign the result of 10 * 20 to a variable and then print to the screen. Think of a variable
					as a holding place for piece of information where we can change what that piece of information is over time.
					We can call this variable whatever we want, but in this problem, let's just call it the word result.
					The 2 lines of code for this problem have already been written for you in the coding area. 
					They read "result = 10 * 20 and print result." The first line assigns 10 * 20 to result, and the second line
					prints the value of result to the screen. Simply press alt R to run the code.`,
		"example" : "",
		"commands" : [{
						"command":"result = 10*20\nprint result",
						"output":"200"
					}]
		}]];

  return lessons[lesson][section];
}
