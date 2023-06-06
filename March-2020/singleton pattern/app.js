var Singleton = (function() {
  //the variable instance is hidden from outside and we are exposing to clients 'get instance method'
  var instance;

  //initialize a create instance function

  function createInstance() {
    var object = { title: "i am object" };
    return object;
  }

  //we check if instance is already created, if  it is not we create and return
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

alert("Same instance:" + " " + (instance1 == instance2));
