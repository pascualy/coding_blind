const angular = require('angular');
const ngRoute = require('angular-route');
import routing from './main.routes';
import util from '../../components/util/util.module';

export class MainController {
  $http;

  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http) {
    //this.Util = Util
    this.$http = $http;

  }

  $onInit() {
    console.log('main controllr onInit');
    //console.log(typeof util);
    //angular.util.speechToText('hello world');
    //var utils = angular.UtilService();
    //var util = angular.module('codingBlindApp.util')//.UtilService//.speechToText('hello');
    //console.log(util);
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
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
