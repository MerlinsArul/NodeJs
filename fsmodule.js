const fs = require("fs");
const { Server } = require("http");

console.log("First");
const fileContent = fs.readFileSync("./filemod.txt","utf-8")
console.log(fileContent);

console.log("Second");
fs.readFile("./text.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})
console.log("Third");

fs.writeFileSync("./greet.txt","Hello World\n");
fs.writeFile("./greet.txt","Hello Everyone\n",{flag:"a"},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File is written as async function");
    }
})


