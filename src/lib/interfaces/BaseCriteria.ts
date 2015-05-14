import BaseOption = require('./BaseOption');

interface BaseCriteria {
  criteria: BaseCriteria[];
  watchers: BaseCriteria[];
  name: string;
  option: BaseOption;
  setOption(opt: BaseOption);
  getString(): string;
  needs(criteria: BaseCriteria[]);
  addListener(criteria: BaseCriteria);
  parentUpdated(parent: BaseCriteria);
  notifyListeners();
  canFetchOptions():boolean;
}

export = BaseCriteria;