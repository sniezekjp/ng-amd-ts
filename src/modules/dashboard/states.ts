/// <reference path="../../app.d.ts"/>

import app = require('app');
app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider.state('dash', {
    url: '/',
    controller: 'DashController',
    template: '<a ui-sref="other">Other</a>',
    resolve: {
      _lazy: function(Lazy) {
        return Lazy.load('modules/dashboard/controllers/DashController');
      }
    }
  });
  
  $stateProvider.state('other', {
    url: '/other',
    template: '<a ui-sref="dash">Dash</a>'
  });
  
  $urlRouterProvider.otherwise('/');
});