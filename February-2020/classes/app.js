//class declarations
/*
class Rectangle {
  constuctor(width, height) {
    this.width = width;
    this.height = height;
  }
}
console.log(Rectangle.width);
*/

const Greeting = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  present(x) {
    return x + ` my name is ${this.name} and i am ${this.age} years old`;
  }
  //staticv
  static myHello() {
    return "hello";
  }
};

myGreeting = new Greeting("Paris", "35");

document.getElementById("demo").innerHTML = `<h1> ${myGreeting.present(
  "Hello"
)};</h1>`;

document.getElementById("output").innerHTML = `<h1>${Greeting.myHello()}</h1>`;
console.log(myGreeting);

//Inheritance
