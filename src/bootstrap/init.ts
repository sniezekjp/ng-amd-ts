/// <reference path="../app.d.ts"/>

import 'lazy';
import 'animate';
import 'resource';
import 'lib/classes/Q';
import 'lib/classes/API';
import 'modules/dashboard/states';

import $ = require('jquery');
import angular = require('angular');

$(document).ready(function(){
  angular.bootstrap(document, ['app']);
});