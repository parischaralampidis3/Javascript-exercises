let useStr = '{"name":"Sammy", "email":"paris@example.com","plan":"Pro"}';

//console.log(useStr);

let useObj = JSON.parse(useStr, (key,value)=>{
    if(typeof value === 'string'){
        return value.toUpperCase();
    }
    return value;
});

let stingifyUser = JSON.stringify(useObj)
console.log(stingifyUser);