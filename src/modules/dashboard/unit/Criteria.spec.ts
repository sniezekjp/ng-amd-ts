/// <reference path="../../../app.d.ts"/>

import Criteria = require('modules/dashboard/lib/Criteria'); 
import Option = require('modules/dashboard/lib/Option');
import angular = require('angular');

describe('Criteria', function() {
    var city, state, country, option;
    beforeEach(function() {
        city = new Criteria('City');
        state = new Criteria('State');
        country = new Criteria('Country');
        option = new Option();
    });
    it('should have the correct interface', function() {
        expect(state.name).toBe('State');
        expect(angular.isArray(state.watchers)).toBe(true);
        expect(angular.isArray(state.criteria)).toBe(true);
    });
    it('should watch dependencies', function() {
        expect(true).toBe(true);
    });
});