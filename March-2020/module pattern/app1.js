var myModule = (function() {
  "use strict";
  var _privateProperty = "hello world";

  function _privateMethod() {
    console.log(_privateProperty);
  }
  return {
    publicMethod: function() {
      _privateMethod();
    }
  };
})();
myModule.publicMethod();
console.log(myModule._privateProperty);
myModule._privateMethod();
