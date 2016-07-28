exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var time;
    function myFunc () {
      console.log(start++); 

      if (start <= end) {
        time = setTimeout(myFunc, 100);
      }
    }

    myFunc();

    return {
      cancel: function () {
        time && clearTimeout(time);
      }
    };
  }
};
