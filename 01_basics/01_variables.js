const accountId = 144554
let accountEmail = "akshaytest@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hcw@test.com"
accountPassword = "8787878787"
accountCity = "Bengluru"


/*
Note:- Prefer not to use "Var", because of issue in block scope and functional scope
*/


// console.log(accountId); - use this statement to print result

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // - use this statement to print result
