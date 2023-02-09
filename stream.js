const fs = require("fs")

const readablestream = fs.createReadStream("./filemod.txt",{
    encoding:"utf-8"
})
const writablesteam = fs.createWriteStream("./filemod2.txt");

// using stream

readablestream.on("data",(chunck)=>{
    console.log(chunck);
    writablesteam.write(chunck);
})


// using pipe

readablestream.pipe(writablesteam);