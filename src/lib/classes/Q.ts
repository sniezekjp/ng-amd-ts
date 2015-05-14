
import app = require('app');
import angular = require('angular');
import BaseQ = require('lib/interfaces/BaseQ');

var q;
class Q implements BaseQ {
  public resolve;
  public reject;
  public promise;
  constructor(resolve?, reject?) {
    var defer = q.defer();
    this.resolve = defer.resolve;
    this.reject = defer.reject;
    this.promise = defer.promise;
    defer.promise.then(resolve);
    defer.promise.catch(reject);
  }
}

app.run(function($q) {
  q = $q;
});

export = Q;