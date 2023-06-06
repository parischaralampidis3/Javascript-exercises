//IFFE-this function calls itself immediately
//this function creates a new scope and creates privacy.
//we need to namespace our code so that we can access any methods we return
var Module = (function() {
  /* our function privateMethod, which is locally declared inside the new scope. If we were to attempt calling it anywhere outside of our module, we’ll get an error thrown and our JavaScript program will break! We don’t want anyone to be able to call our methods, especially ones that might manipulate data and go back and forth to a server. */
  /*Typical Modules will use return and return an Object to the Module, to which the methods bound to the Object will be accessible from the Module’s namespace. */
  return {
    publicMethod: function() {
      //do something
    }
  };
})();

//As we’re returning an Object Literal, we can call them exactly like Object Literals:
Module.publicMethod();
