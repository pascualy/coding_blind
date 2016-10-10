'use strict';

export function routeConfig($routeProvider, $locationProvider) {
  'ngInject';
  $routeProvider
    .otherwise({
      redirectTo: '/'
    });
  // $location is a service that allows you to view and change
  // the current url in the search bar. $locationProvider allows
  // us to change how the service behaves. html5Mode just uses a 
  // different api for accessing location elements.
  // https://docs.angularjs.org/guide/$location#html5-mode
  // check out the link to see what $location can give you. 
  $locationProvider.html5Mode(true);
}
