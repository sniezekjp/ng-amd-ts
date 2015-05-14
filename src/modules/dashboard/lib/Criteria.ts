/// <reference path="../../../app.d.ts"/>
import BaseCriteria = require('lib/interfaces/BaseCriteria');
import Option = require('./Option');

class Criteria implements BaseCriteria {
  public criteria: Criteria[] = [];
  public watchers: Criteria[] = [];
  public option: Option;
  
  constructor(public name:string) {}
  
  setOption(opt: Option) {
    this.option = opt;
    this.notifyListeners();
  }

  private _recurse(criteria, result) {    
    criteria.forEach((c) => {
      let value = c.option ? c.option.value : "";
      result.push(`${c.name}="${value}"`);
      this._recurse(c.criteria, result);
    });
  }

  getString(): string {
    var result = [];
    
    this._recurse(this.criteria, result);

    if(result.length > 1) {
      result = result.reverse();
    }

    let value = this.option ? this.option.value : "";
    result.push(`${this.name}="${value}"`);

    return result.join(", ");
  }
  
  needs(criteria: Criteria[]) {
    this.criteria = criteria;
    this.criteria.forEach((c) => {
      c.addListener(this);
    });
  }

  addListener(criteria: Criteria) {
    this.watchers.push(criteria);
  }

  parentUpdated(parent:Criteria) {
    console.log(parent);
    console.log(`fetching ${this.name} options`);
  }

  notifyListeners() {
    this.watchers.forEach((criteria)=>{
      criteria.parentUpdated(this);
    });
  }

  canFetchOptions():boolean {
    var allHaveOptions = true;
    function _parentsHaveOptions(criteria) {
      criteria.forEach(function(c) {
        if(!c.option || !c.option.value) {
          allHaveOptions = false;
        }
        _parentsHaveOptions(c.criteria);
      });
    }
    _parentsHaveOptions(this.criteria);
    return allHaveOptions;
  }
}

export = Criteria;