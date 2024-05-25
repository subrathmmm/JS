function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("B");
    console.log("R");
    console.log("A");
    console.log("T");
}

// sayMyName();

function addTwoNum(number1, number2){
    // let result = number1 + number2
    // return result
    return number1+number2;
}

const result = addTwoNum(3, 6);
// console.log("Result: ",result);

// function addTwoNumbers(number1, number2){
//     let number1 = 3;
//     let number2 = 4;
//     console.log(number1 + number2);
// }

function loginUserMessage (username = "sam"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2,...num1){
    return num1;
}

//console.log(calculateCartPrice(200, 400, 100, 2000, 300));

const user = {
    username: "subrat",
    price: 199
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.username} and its price is ${anyObj.price}`);
}
// handleObject(user);


const newArray = [200, 100, 600, 499];

function returnSecondValue(anyarray){
    return anyarray[1];
}
console.log(returnSecondValue(newArray));