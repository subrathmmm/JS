// Dates ---> object
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,4,22);
// let myCreatedDate = new Date(2024,4,22,9,15);
// let myCreatedDate = new Date("2024-5-22");
let myCreatedDate = new Date("5-21-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate)
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
