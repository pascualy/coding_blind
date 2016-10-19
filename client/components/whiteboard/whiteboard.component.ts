const angular = require('angular');
import content from  '../content/content.module';

export class WhiteboardComponent {
	content;
	lesson;
	title;
	header;
	hints;
	body;	
	example;
	commands;
	constructor(Content) {
		this.content = Content[0];
		this.lesson = this.content.lesson;
		this.title = this.content.title;
		this.header = this.content.header;
		this.hints = this.content.hints;
		this.body = this.content.body;
		this.example = this.content.example;
		this.commands = this.content.commands;
	}
}

export default angular.module('directives.whiteboard', ['directives.content'])
  .component('whiteboard', {
    template: require('./whiteboard.html'),
    controller: WhiteboardComponent
  })
  .name;