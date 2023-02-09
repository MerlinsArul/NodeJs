const http = require("http");
const fs =  require('fs')
const server = http.createServer((req,res)=>{

const stud ={
    firstName :"Merlins",
    lastName:"Juliet"
};
    res.writeHead(200,("Content-Type","text/html"));
// For loading large content from html page we use createReadStream method
fs.createReadStream("./index.html").pipe(res);



    // const html = fs.readFileSync("./index.html","utf-8")
    // res.end(html)
})
server.listen(3000,()=>{
    console.log('server is running on port 3000 ');
})