// for_

// for(let i = 0; i <= 10; i++){
//     if(i == 5){
//         console.log(`${i}, is the best number`);
//     }
//     console.log(i);
// }

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for(let b = 0; b < myArray.length; b++){
    console.log(myArray[b]);
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log(`detected 5`);
        continue;
    }
    console.log(index);

}