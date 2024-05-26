const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "ssubrat";
//     console.log(this.username)
// }
// chai();

//const chai = function(){
    //let username = "subrat";
    // console.log(this.username);
//}
// chai();

// const chai = () => {
//     let username = "suubraat";
//     console.log(this)
// }
// chai();


// const addTwo = (num1,  num2) =>{
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1 , num2) => (num1 + num2);

// const addTwo = (num1, num2) => ({username: "subrattttt"})


console.log(addTwo(3,5));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

