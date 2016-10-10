const angular = require('angular');

export class IdeComponent {}

export default angular.module('directives.ide', [])
  .component('ide', {
    template: require('./ide.html'),
    controller: IdeComponent
  })
  .name;
