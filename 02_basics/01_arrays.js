const myArr = [1, 2, 3, 4, 5];
const myHeros = ["me", "myself"];
const myArr2 = new Array(11, 12, 13, 14, 15);
// console.log(myHeros[1]);

// METHODS
 myArr.push(6);
 myArr.pop();
 // console.log(myArr);

 myArr.unshift(9);
 myArr.shift();
 // console.log(myArr);

 // console.log(myArr.includes(9));
 // console.log(myArr.indexOf(3));

 const newArr = myArr.join();
 // console.log(newArr);


 // slice and splice
 console.log("A", myArr);
 const myn1 = myArr.slice(1,3);
 console.log(myn1);
 console.log("B", myArr);
 
 const myn2 = myArr.splice(1,3);
 console.log(myn2);
 console.log("c", myArr);






