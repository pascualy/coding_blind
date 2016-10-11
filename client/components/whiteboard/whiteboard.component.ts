const angular = require('angular');

export class WhiteboardComponent {
	section = '1.1';
	title = 'Math in Python';
	header = 'To the right is the Python interpreter. Any time you see this console to the right you can type in some Python code and hit enter and that code will run.\n\n Give it a try by typing in the year 2016 and subtracting out the year you were born. You should get your age (depending on if you\'ve had your birthday already, that is). For example, George Washington was born in 1732:';
	hints = ['hint1','hint2','hint3'];
	
	constructor() {

	}
}

export default angular.module('directives.whiteboard', [])
  .component('whiteboard', {
    template: require('./whiteboard.html'),
    controller: WhiteboardComponent
  })
  .name;