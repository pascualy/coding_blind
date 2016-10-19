const angular = require('angular');
//const skulpt = require('skulpt');

export class IdeComponent {
	$document; 
	$window;
  constructor($window, $document) {

  }
}

export default angular.module('directives.ide', [])
  .component('ide', {
    template: require('./ide.html'),
    controller: IdeComponent
  })
  .name;


