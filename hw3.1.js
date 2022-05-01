Array.prototype.myFilter = function (cb, obj) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    cb.call(obj, this[i], i, this) && result.push(this[i]);
  }

  return result;
};
