export function parseAndResolve(json)
{
  var refMap = {};

  return JSON.parse(json, function (key, value) {
    if (key === '$id') {
      refMap[value] = this;
      // return undefined so that the property is deleted
      return void (0);
    }

    if (value && value.$ref) {
      return refMap[value.$ref];
    }

    return value;
  });
}
