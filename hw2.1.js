function makeObjectDeepCopy(obj) {
  let clone = {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      clone[key] = makeObjectDeepCopy(obj[key]);
    }
    clone[key] = obj[key];
  }
  return clone;
}


