const angular = require('angular');
const ngRoute = require('angular-route');
import routing from './main.routes';
import util from '../../components/util/util.module';

export class MainController {
  /*@ngInject*/
  example = 'hello';
  $window;
  constructor() {
    console.log(this.example)
    this.$window = window;
    
  }


  readIntro = function($window) {
    var x = document.getElementById("intro").innerText;
    var msg = new $window.SpeechSynthesisUtterance("hey");
    $window.speechSynthesis.speak(msg);
  }

}


export default angular.module('codingBlindApp.main', [
  ngRoute])
    .config(routing)
    .component('main', {
      template: require('./main.html'),
      controller: MainController
    })
    .name;
