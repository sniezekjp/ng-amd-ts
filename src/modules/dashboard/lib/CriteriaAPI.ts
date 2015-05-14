/// <reference path="../../../app.d.ts"/>
import API = require('lib/classes/API');

class CriteriaAPI extends API {
  public custom;
  constructor() {
    super('http://localhost:3000/data.json', {}, {
      custom: {
        method: "POST"
      }
    });
  }
}

export = CriteriaAPI;