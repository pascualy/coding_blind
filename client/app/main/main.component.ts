const angular = require('angular');
const ngRoute = require('angular-route');
import routing from './main.routes';
import util from '../../components/util/util.module';

export class MainController {
  /*@ngInject*/
  example = 'hello';
  constructor(Shortcuts) {
    console.log(this.example)

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
