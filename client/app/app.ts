'use strict';
const angular = require('angular');
// import ngAnimate from 'angular-animate';
const ngCookies = require('angular-cookies');
const ngResource = require('angular-resource');
const ngSanitize = require('angular-sanitize');
const ngAria = require('angular-aria');
const ngAnimate = require('angular-animate');
const ngMessages = require('angular-messages');
const ngMaterial = require('angular-material');

const ngRoute = require('angular-route');

const uiBootstrap = require('angular-ui-bootstrap');
// const ngMessages = require('angular-messages');

import {routeConfig} from './app.config';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import classroom from './classroom/classroom.component';
import whiteboard from '../components/whiteboard/whiteboard.component';
import ide from '../components/ide/ide.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import content from  '../components/content/content.module';

import './app.scss';

// Create module that will be bootstrapped (aka started) in the next line
// Note that when you pass the .module command just a name it returns
// the module instead of creating a new one
angular.module('codingBlindApp', [
  // allow an easy way to access browser cookies!
  ngCookies,
  // allow an easy way to access restful services
  // so that you do not need to create full requests 
  ngResource,
  // helps you sanitize user input of malicious tags
  ngSanitize,
  ngAria,
  ngAnimate,
  ngMessages,
  ngMaterial,

  // https://docs.angularjs.org/api/ngRoute/service/$route#example
  // check out the example above to get an idea how to use the ngRoute
  // service
  ngRoute,
  // 
  uiBootstrap,
  navbar,
  footer,
  main,
  classroom,
  ide,
  whiteboard,
  constants,
  util,
  content
  ])
  .config(routeConfig)
;

angular.module('codingBlindApp').directive('checkkey', function($window) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            console.log('workedasdfasd');
            elem.bind('keyup', function(event) {
                console.log('heddllo');
                if (event.keyCode === 13) {
                    event.preventDefault();
                    return false;
                }
            });
        }
    }
});



// Waits for document to be ready until loading dom
angular
  .element(document)
  .ready(() => {
    // manually chooses when to load the dom
    // arguments, element (DOM to load), modules, and configs
    angular.bootstrap(document, ['codingBlindApp'], {
      strictDi: true
    });
  });
