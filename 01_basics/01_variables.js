const accountId = 1234;
let accountEmail = "aba@abc.com"
var accountPassword = "696969";
accountCity = "Kolkata";                //possible, but do not use it ever again
let accountState;


// accountId = 2;
accountEmail = "xyz@try.in";
accountPassword = "121212";
accountCity = "Delhi";

console.log(accountId);
/*
prefer not to use var
because of issue in bloack scope and functional scope
*/

console.table([accountId, accountEmail,accountPassword,accountCity, accountState]);