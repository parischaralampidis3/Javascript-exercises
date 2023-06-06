//example of callback - three
let calc = function(num1, num2, callback) {
  if (callback == "add") {
    return num1 + num2;
  } else if (callback == "multiply") {
    return num1 * num2;
  } else {
    console.log("calculation not found");
  }
};
console.log(calc(2, 5, "divide"));
