
const today = new Date ();

let hourNow = today.getHours();

if( hourNow > 18 ){

    greeting = "Good evening";

}
else if ( hourNow > 12 ){

    greeting = "Good afternoon";
}
else{
    greeting = "Welcome";
};

document.write( "<h3>" + greeting + "</h3>");

//console.log("hours now",hourNow);

//console.log("date", today);
