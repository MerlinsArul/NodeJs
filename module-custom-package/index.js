
// Third party module 
const upperCase = require("upper-case").upperCase;

function greet(name){
    console.log(upperCase(`Hello ${name} , welcome to nodejs!!`));
}
greet("merlins")
module.exports = greet;