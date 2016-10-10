const angular = require('angular');

export class WhiteboardComponent {}

export default angular.module('directives.whiteboard', [])
  .component('whiteboard', {
    template: require('./whiteboard.html'),
    controller: WhiteboardComponent
  })
  .name;
