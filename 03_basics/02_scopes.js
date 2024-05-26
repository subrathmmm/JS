// var c = 300;
let a = 20;
const b = 9900;
if(true){
    let a = 200;
    const b = 79;
    // var c = 82;
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "subrat";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    // two();
}
// one();

if(true){
    const username = "subrat";
    if(username === "subrat"){
        const website = "github";
        console.log(`this site is ${website} and username is ${username}`);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(3));
function addone(num){
    return num+1;
}

const addtwo = function(num){
    return num+2;
}
console.log(addtwo(56));

