const angular = require('angular');
const ngRoute = require('angular-route');
import routing from './main.routes';
import util from '../../components/util/util.module';

export class MainController {
  /*@ngInject*/
  constructor() {
    //this.example = 'Hello';

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
