const http = require("http");
const server = http.createServer((req,res)=>{

const stud ={
    firstName :"Merlins",
    lastName:"Juliet"
};
    res.writeHead(200,("Content-Type","application/json"));
    res.end(JSON.stringify(stud))
})

const PORT = process.env.PORT || 3000;

server.listen(PORT,()=>console.log("Server is running"))
