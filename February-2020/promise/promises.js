let toCleanTheRoom = new Promise(function(resolve, reject) {
  let isClean = false;
  if (isClean) {
    resolve("clean");
  } else {
    reject("not clean");
  }
});

toCleanTheRoom
  .then(function(fromResolve) {
    console.log(`The room is ${fromResolve}`);
  })
  .catch(function(fromReject) {
    console.log(`The room is ${fromReject}`);
  });
