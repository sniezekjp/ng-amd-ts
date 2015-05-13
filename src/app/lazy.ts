/// <reference path="../app.d.ts"/>

import app = require('app');

app.provider('Lazy', function() {
  function factory($q) {
    return {
      load: function(info) {
        var defer = $q.defer();
        if(!angular.isArray(info)) {
          info = [info];
        }
        require(info, function() {
          defer.resolve();
        });
        return defer.promise;
      }
    };
  }
  return {
    $get: factory
  };
});

var provider = {
  factory:angular.noop,
  service:angular.noop,
  directive:angular.noop,
  filter:angular.noop,
  controller:angular.noop,
};
app.config(function($provide, $controllerProvider, $compileProvider, $filterProvider) {
  provider.factory = $provide.factory;
  provider.service = $provide.service;
  provider.directive = $compileProvider.directive;
  provider.filter = $filterProvider.register;
  provider.controller = $controllerProvider.register;
});

export = provider;