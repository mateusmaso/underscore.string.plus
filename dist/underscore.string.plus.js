// underscore.string.plus
// ----------------------
// v0.1.4
//
// Copyright (c) 2016 Mateus Maso
// Distributed under MIT license
//
// http://github.com/mateusmaso/underscore.string.plus

(function(root, factory) {

  if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    if (typeof module !== 'undefined' && module.exports)
      module.exports = factory(_);
    exports = factory(_);
  } else {
    root._.string = root._.string || s.exports();
    root._.extend(root._.string, factory(root._));
  }

}(this, function(_) {

  return {
    lowerize: function(string) {
      string = string == null ? '' : String(string);
      return string.charAt(0).toLowerCase() + string.slice(1);
    },

    splitInTwoSentences: function(string){
      var regexp = /^.*?[\.!\?](?:\s|$)/;
      var sentence = string.match(regexp);
      var complement = string.replace(regexp, "");

      if (!sentence) {
        var regexpSecondary = /^.*?[:;,\.{3}−—](?:\s|$)/;
        sentence = string.match(regexpSecondary);
        complement = string.replace(regexpSecondary, "");

        if (!sentence){
          sentence = complement;
          complement = null;
        } else {
          sentence = sentence[0];
        }
      } else {
        sentence = sentence[0];
      }

      return [sentence || "", complement || ""];
    },

    isUrl: function(string) {
      var regexp = /^(?:(https?|ftp):\/\/|www\.)\w[\w~#-@!\[\]]*$/;
      return regexp.test(string);
    }
  };

}));
