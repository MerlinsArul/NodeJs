const fs = require("fs")

const readablestream = fs.createReadStream("./filemod.txt",{
    encoding:"utf-8"
})
const writablesteam = fs.createWriteStream("./filemod2.txt");

// using stream

readablestream.on("data",(file)=>{
    console.log(file);
    writablesteam.write(file);
})


const { Readable } = require('stream');
  
// Reading the data 
const inStream = new Readable({
    read() { }
});
  
// Pushing the data to the stream
inStream.push('Angular: ');
inStream.push(
    'Angular is used as Frontend');
  
// Indicates that no more data is
// left in the stream
inStream.push(null);
  
// Echoing data to the standard output
inStream.pipe(process.stdout);