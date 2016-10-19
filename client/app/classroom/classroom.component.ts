'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './classroom.routes';

export class ClassroomComponent {
  /*@ngInject*/

  objective = 'asdf';

  constructor(Util, Shortcuts) {
    this.objective = 'Counting Money!';
    //console.log(Util.textToSpeech(this.objective));
  }
}

export default angular.module('codingBlindApp.classroom', [ngRoute, 'directives.shortcuts', 'directives.util'])
  .config(routes)
  .component('classroom', {
    template: require('./classroom.html'),
    controller: ClassroomComponent
  })
  .name;
