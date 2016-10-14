const angular = require('angular');
import content from  '../content/content.module';

export class WhiteboardComponent {
	content;
	section;
	title;
	header;
	hints;
	body;
	examples;
	commands;
	constructor(Content) {
		//console.log(content.lesson);
		this.content = Content;
		this.section = this.content.section;
		this.title = this.content.title;
		this.header = this.content.header;
		this.hints = this.content.hints;
		this.body = this.content.body;
		this.examples = this.content.examples;
		this.commands = this.content.commands;
	}
}

export default angular.module('directives.whiteboard', ['directives.content'])
  .component('whiteboard', {
    template: require('./whiteboard.html'),
    controller: WhiteboardComponent
  })
  .name;