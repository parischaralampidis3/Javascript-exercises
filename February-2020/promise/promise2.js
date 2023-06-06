let keepHisWord;
keepHisWord = true;

promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (keepHisWord) {
      resolve("The mans likes to keep his word");
    } else {
      reject("The man doesn't want to keep his word");
    }
  }, 10 * 1000);
});

console.log(promise1);
