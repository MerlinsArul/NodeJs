const fs = require("fs/promises");

async function readFile(){
    try{
        const data = await fs.readFile("filemod.txt","utf-8")
        console.log(data);
    } catch(err){
        console.log(err);
    }
}
readFile();

console.log("First Method");
fs.readFile("text.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
console.log("Second Method");
