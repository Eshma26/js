const accountId=12345
let accountEmail= "abc@gmail.com"
var accountPassword="98765"
accountCity= "Jaipur"
let accountState;

// accountId=2 
accountEmail="xyz@gmail.com"
accountPassword="121212"
accountCity="Kolkata"

console.log(accountCity)

/*Prefer not to use var
because of issue in block scope and functional scope */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])