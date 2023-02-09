const http = require("http");
const server = http.createServer((req,res)=>{

const stud ={
    firstName :"Merlins",
    lastName:"Juliet"
};
    res.writeHead(200,("Content-Type","application/json"));
    res.end(JSON.stringify(stud))
})
server.listen(3000,()=>{
    console.log('server is running on port 3000 ');
})
