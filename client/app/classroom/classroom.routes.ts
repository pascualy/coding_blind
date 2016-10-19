'use strict';

export default function routes($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/classroom', {
      template: '<classroom></classroom>'
    });
}
