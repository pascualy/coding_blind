'use strict';
const angular = require('angular');
import {ContentService} from './content.service';

export default angular.module('directives.content', [])
  .factory('Content', ContentService)
  .name;
