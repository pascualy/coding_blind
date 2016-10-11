'use strict';
const angular = require('angular');
const ngMaterial = require('angular-material');


function SideMenuController($mdSidenav) {
  var ctrl = this;
  ctrl.help = 'hiiiii';
  ctrl.openLeftMenu = function() {
        console.log('rannn');
        $mdSidenav('left').toggle();
  };

}

export default angular.module('codingBlindApp.sidemenu', [ngMaterial])
  .component('sidemenu', {
  	template: require('./sidemenu.html'),
    controller: SideMenuController
  })
  .name;