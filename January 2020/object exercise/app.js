const class9 = [
    {
        name: "Kostas",
        surname: "Minaidis",
        origin: "Greece"
    },
    {
        name: "Evina",
        surname: "Mouselimi",
        origin: "Greece"
    },
    {
        name: "Charalampos",
        surname: "Anagnostou",
        origin: "Greece"
    },
    {
        name: "Paris",
        surname: "Charalampidis",
        origin: "Greece"
    },
    {
        name: "Amirhossein",
        surname: "Mousavi",
        origin: "Afghanistan"
    },
    {
        name: "George",
        surname: "Andris",
        origin: "Greece"
    },
    {
        name: "Sobhan",
        surname: "Esfandyari",
        origin: "Iran",
    },
    {
        name: "Maria",
        surname: "Bouguettaya",
        origin: "Morocco"
    },
{
        name: "Stefanos",
        surname: "Gkikas",
        origin: "Greece"
    },
    {
        name: "abdellatif",
        surname: "ketoun",
        origin: "Morocco"
    },
    {
        name: "Achilles",
        surname: "Kestekides",
        origin: "Greece"
    },
    {
        name: "Giannis",
        surname: "Lagos",
        origin: "Greece",
    },
    {
        name: "Murtaza",
        surname: "Hassani",
        origin: "Afghanistan"
    }
];


const family = {
    name: ['Paris','Giorgia','Beba'],
    age: [39,35,0],
    bio:function(){
        console.log(`${this.name[0]} is ${this.age[0]} years old. ` )
    },
    introduceYourself: function(){
        console.log(`Hi, my name is ${this.name[2]}`)
    }
}
family.aunt = ['Dana','Nefeli'];
console.log(family.name);
family.bio()
family.introduceYourself()
console.log(family.aunt)