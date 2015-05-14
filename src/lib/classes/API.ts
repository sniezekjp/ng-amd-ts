
import angular = require('angular');
import app = require('app');
import BaseAPI = require('../interfaces/BaseAPI');
import BaseModel = require('../interfaces/BaseModel');

var resource;

var defaults = {
  get: {
    method: 'GET'
  }
};

class API implements BaseAPI {
  public _resource:any;
  constructor(public url: string, params={}, override={}) {
    angular.extend(defaults, override);
    var _resource = this._resource = resource(url, params, defaults);

    Object.keys(override).forEach((key)=>{
      this[key] = function(){
        return _resource[key].apply(this, arguments).$promise;
      }
    });
  }

  get() {
    return this._resource.get().$promise;
  }

  getOne() {
    console.log('getting one');
  }

  update(id, model: BaseModel) {
    console.log('updating');
  }

  destroy(id) {
    console.log('destroying');
  }

  create(model: BaseModel) {
    console.log('creating');
  }
}

app.run(function($resource) {
  resource = $resource;
});

export = API;