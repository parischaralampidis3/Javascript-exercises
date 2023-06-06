/*
function getToDoList(result_handler)
try{
    var data = load.from.server();
    show.task(data)
}catch{ 
    on.error()
}

var result_handler = {
    on-success: function(data){
        alert('success') },
    on.error: function(){
        alert('error')
    }
    }
*/
    //object that takes two callbacks 
    /*
    var p = new Promise(resolve,reject);

    function getData(){
        function onSuccess(){

        }
        function onError(){

        }
        return new Promise(onSuccess, onError);
    }

    var p = getData();
    p.then(
        function(data){
            
        },
        {

        }
    )
*/
let allBreeds;
let 
fetch('https://dog.ceo/api/breeds/list/all'){
    .then( res => res.json())
    .then(data => dogApiData = data)
    .then(() => formatData());
}
function formatData(){
    console.log(dogApiData);
    allBreeds = Object.entries(dogApiData.message);
}