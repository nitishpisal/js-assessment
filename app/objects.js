exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var x = [];

    for (var check in obj) {
      if (obj.hasOwnProperty(check)) {
        x.push(check + ': ' + obj[check]);
      }
    }

    return x;
  }
};
