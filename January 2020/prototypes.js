
function Info(firstName,lastName, birthday){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(birthday);
    /*this.calculateAge = function(){
      const diff =  Date.now() - this.birthDate.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970)
    }*/

}
// calculate age

Info.prototype.calculateAge = function(){
    const diff =  Date.now() - this.birthDate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
//get full name 

Info.prototype.getFullName = function(){
 return `firstname: ${this.firstName}  lastname:${this.lastName}`;
};

//change name 

Info.prototype.changeName = function(newLastName){
    this.lastName = newLastName;     
};


const paris = new Info('Paris', 'Charalampidis' ,'10/16/1984');
const nikos = new Info('Nikos', 'Moraitis', '4/25/1978')

console.log(nikos);
console.log('paris age:', paris.calculateAge());
console.log('nikos full name:',nikos.getFullName());

nikos.changeName('Petalas');
console.log(nikos.getFullName());
console.log(nikos.hasOwnProperty('firstName'));