'use strict';
const angular = require('angular');
import {ShortcutsService} from './shortcuts.service';

export default angular.module('directives.shortcuts', [])
  .factory('Shortcuts', ShortcutsService)
  .name;
