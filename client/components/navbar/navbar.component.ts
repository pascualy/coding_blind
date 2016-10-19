
'use strict';
/* eslint no-sync: 0 */
const angular = require('angular');
const ngMaterial = require('angular-material');

export class NavbarComponent {
  menu = [{
    'title': 'Home',
    'link': '/'
                  },{
    'title': 'Lesson 1',                
    'link' : '/classroom'}
    ];
  $location;
  isCollapsed = true;
  $mdSidenav;
  constructor($location, $mdSidenav) {
    'ngInject';
    this.$location = $location;
    this.$mdSidenav = $mdSidenav;
  }

  isActive(route) {
    return route === this.$location.path();
  }

  openLeftMenu = function() {
        console.log('rannn');
        this.$mdSidenav('left').toggle();
  };

}

export default angular.module('directives.navbar', [ngMaterial])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
.name;