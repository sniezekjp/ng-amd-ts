/// <reference path="../../../app.d.ts"/>
import BaseOption = require('lib/interfaces/BaseOption');

class Option implements BaseOption {
  constructor(public value:string = "") {}
}

export = Option;