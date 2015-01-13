define([], function (d3) {
  function betty()  {
    var beta = 0.1;
    var subtractor = 0.0001;

    this.start = function () {
      setInterval(function () {
        if (beta > 0) beta -= subtractor;
        if (beta < 0) beta = 0;
      }, 1);
    };

    this.beta = function () {
      if (arguments.length > 0) {
        var _beta = arguments[0];
        _beta < 0.1 ? beta = _beta : beta = 0.1 ;

      }
      return beta;
    };
  }

  return betty;
});
