// singleton
// Object.create

// object literals
const mySym = Symbol("key1");

const jsUser = {
    name: "Subrat",
    "full name": "Subrat Masoom",
    age: 19,
    [mySym]: "mykey1",
    location: "Begusarai",
    email: "subrat@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "tuesday"]
}
//console.log(jsUser["full name"]);
//console.log(jsUser["email"]);
//console.log(jsUser[mySym]);

jsUser.email = "subrat@chatgpt.com";

// Object.freeze(jsUser);
jsUser.email = "sm@flipkart.com";
console.log(jsUser.email);


jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this["full name"]}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());