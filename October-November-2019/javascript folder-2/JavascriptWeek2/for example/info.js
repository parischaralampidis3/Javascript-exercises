
let ourPhone={

    owner:"Stefanos",
    ownersLastName:"Charalampidis",
    tellNumber:"6947491008",
    year:2019,
    isSmart:true,
    ring: function(){
        console.log("some is calling"+ ' ' + this.owner);
    }
}


function callOwner(){

     if(ourPhone.owner == "Stefanos"){
         
        ourPhone.ring();

     }else{

        console.log( "someone else called");

     }
}
callOwner();


/*

let arr= [ 
    {
        name:"Paris",phoneNumber : "100"
    },
    {
        name:"Achilles", phoneNumber: "166"
    },
    {
        name:"Evina", phoneNumber: "112"
    }

];

let ourPhone={

    owner:"Stefanos",
    ownersLastName:"Charalampidis",
    tellNumber:"6947491008",
    year:2019,
    isSmart:true,
    ring: function(caller){/*
        if(caller === arr[2].phoneNumber){
        console.log(arr[2].name + " is calling");
    }else{
        console.log( "someone else is called");
    }*/
    /*
    for(let i=0; i<arr.length; i++){
        if(caller == arr[i].phoneNumber){
            console.log(arr[i].name);
            break;
        }else{
            console.log("unknown")
            break;
        }
    }
}
}
ourPhone.ring("0");
*/
//-------------------
/*
const months = ["January","February","March","April","May","June","July","August","September","October","November","December "];

for( let i=0; i<months.length; i++){
console.log( months[i]);
i++;
}
*/