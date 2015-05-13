/// <reference path="../app.d.ts"/>
/// <amd-dependency path="lazy"/>
/// <amd-dependency path="animate"/>
/// <amd-dependency path="modules/dashboard/states"/>

import $ = require('jquery');
import angular = require('angular');

$(document).ready(function(){
  angular.bootstrap(document, ['app']);
});