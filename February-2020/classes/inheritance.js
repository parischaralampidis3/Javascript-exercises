/*class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a" + " " + this.carname;
  }
}
/*class Model extends Car{
  constructor()
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + "" + "it's a" + " " + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();*/

class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
  eat() {
    return `this is ${this.name} ,his weight is ${this.weight}`;
  }
}
class Gorilla extends Animal {
  constructor(name, weight, location) {
    super(name, weight);
    this.location = location;
  }
  locate() {
    return `${this.eat()} and he is from ${this.location}`;
  }
}

const gorilla = new Gorilla("George", "160kg", "Africa");
document.getElementById("demo").innerHTML = gorilla.locate();
