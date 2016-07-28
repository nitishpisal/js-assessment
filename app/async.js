exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var x = $.Deferred();
    setTimeout(function() {x.resolve(value);}, 15);
    return x.promise();
  },

  manipulateRemoteData: function(url) {
    var x = $.Deferred();

    $.ajax(url).then(function(resp) {
      var people = $.map(resp.people, function(person) {return person.name;});
      x.resolve(people.sort());
    });

    return x.promise();
  }
};
