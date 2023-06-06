function MemberFactory() {
  this.createMember = function(name, type) {
    let member;
    if (member === "simple") {
      member = new SimpleMembership(name);
    } else if (member === "standard") {
      member = new StandardMembership(name);
    } else if (member === "super") {
      member = new SuperMembership(name);
    }
    //define the member type
    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = "$5";
};
const StandardMembership = function(name) {
  this.name = name;
  this.cost = "$15";
};
const SuperMembership = function(name) {
  this.name = name;
  this.cost = "$25";
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("John Doe", "simple"));

console.log(members);
