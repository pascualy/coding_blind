'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './classroom.routes';

export class ClassroomComponent {
  /*@ngInject*/

  objective = 'asdf';

  constructor() {
    this.objective = 'Counting Money!';
  }
}

export default angular.module('codingBlindApp.classroom', [ngRoute])
  .config(routes)
  .component('classroom', {
    template: require('./classroom.html'),
    controller: ClassroomComponent
  })
  .name;
