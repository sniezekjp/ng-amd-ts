
import BaseModel = require('./BaseModel');

interface BaseAPI {
  _resource:any;
  get():any;
  getOne(id:number);
  update(id:number, model: BaseModel);
  create(model: BaseModel);
  destroy(id:number);
}

export = BaseAPI;