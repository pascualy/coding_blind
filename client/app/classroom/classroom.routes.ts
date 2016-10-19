'use strict';

export default function routes($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/classroom/lesson/:lesson/section/:section', {
      template: '<classroom></classroom>'
    });
}
