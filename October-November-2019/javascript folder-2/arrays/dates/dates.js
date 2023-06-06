let val ;

const today = new Date (  );
let birthday = new Date("10-16-1984")
 
month = birthday.getMonth();
month = birthday.getDate();
month = birthday.getDay();
month = birthday.getFullYear();

month = today. getHours();
month = today. getMinutes();
month = today. getSeconds();
month = today .getMilliseconds();
month = today. getTime();

month = birthday.setMonth(11);
month = birthday.setDate(7);
month = birthday.setFullYear(1982);
month = birthday.setHours(3);
month = birthday.setMinutes(30);
month = birthday.setSeconds(25);




val = birthday;
 
console.log(month);
console.log( val );
console.log("data type:", typeof val);


