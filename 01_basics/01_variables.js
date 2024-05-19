const accountId = 1222334
let accountEmail = "subrat@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "sm@gmail.com"
accountPassword = "11232"
accountCity = "Delhi"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])