const angular = require('angular');
//const skulpt = require('skulpt');

export class IdeComponent {
	$document; 
	$window;
  constructor($window, $document) {
      this.$document = $document;
      this.$window = $window;
  }

    readLine = function(textarea) {
        var lineNumber = textarea.value.substr(0, textarea.selectionStart).split("\n").length;
        var msg = new $window.SpeechSynthesisUtterance(lineNumber);
        $window.speechSynthesis.speak(msg);
        event.preventDefault();
    }

}

export default angular.module('directives.ide', [])
  .component('ide', {
    template: require('./ide.html'),
    controller: IdeComponent
  })
  .name;


