  module.exports.isObject = function(o) {
      return o !== null && typeof o === 'object' && Array.isArray(o) === false;
  };
    