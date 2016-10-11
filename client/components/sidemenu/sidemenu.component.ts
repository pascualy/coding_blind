'use strict';
const angular = require('angular');
const ngMaterial = require('angular-material');

export default angular.module('codingBlindApp.sidemenu', [ngMaterial])
  .component('sidemenu', {
    controller: function ($scope, $mdSidenav) {
      $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
        };
     }
  })
  .name;