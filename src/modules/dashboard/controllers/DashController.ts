/// <reference path="../../../app.d.ts"/>

import app = require('lazy');
import Criteria = require('../lib/Criteria');
import Option = require('../lib/Option');

import CriteriaAPI = require('../lib/CriteriaAPI');

app.controller('DashController', function(){
  var city = new Criteria('City');
  var county = new Criteria('County');
  var state = new Criteria('State');
  var country = new Criteria('Country');

  var api = new CriteriaAPI();
  api.get().then(function() {
    console.log(arguments);
  });

  state.needs([country]);

  county.needs([state]);
  city.needs([state]);

  var US = new Option('US');
  country.setOption(US);

  var VA = new Option('VA');
  state.setOption(VA);
});



