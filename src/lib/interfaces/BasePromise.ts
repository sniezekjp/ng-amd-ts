
interface BasePromise {
  then(cb);
  success(cb);
  error(cb);
  finally(cb);
}

export = BasePromise;