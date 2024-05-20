//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)



//reference dataTypes
// 1) arrays
// 2) objects
// 3) functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myObj)

// ***************MEMORY*************************
// memory are of two(2) types
// 1) STACK(primitive)
// 2) HEAP(non-primitive)

let myName = "Subrat"
let myAnotherName = "Subh"
myAnotherName = "idk"
console.log(myAnotherName)
console.log(myName)

let userOne = {
email: "subrat@google.com",
upi: "sma@ypl"
}

let userTwo = userOne
userTwo.email = "sm@google.com"
console.log(userTwo.email)
console.log(userOne.email)
