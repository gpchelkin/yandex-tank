(function() {
  var conn;

  conn = new io.connect("http://" + window.location.host);

  conn.on('connect', (function(_this) {
    return function() {
      return alert("Connection opened...");
    };
  })(this));

  conn.on('disconnect', (function(_this) {
    return function() {
      return alert("Connection closed...");
    };
  })(this));

  conn.on('message', (function(_this) {
    return function(msg) {
      return $("#msg").append("<p>" + msg + "</p>");
    };
  })(this));

}).call(this);
