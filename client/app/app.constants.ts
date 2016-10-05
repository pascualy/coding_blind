'use strict';
const angular = require('angular');

export default angular.module('codingBlindApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
