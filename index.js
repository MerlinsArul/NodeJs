/*Non blocking*/
var fs = require('fs');
 var data = fs.readFile('text.txt' , function(err,data){
    if(err){
        console.log(err);
    }
    setTimeout(()=>{
        console.log('Display the Function',data.toString())
    },2000)
 });
 console.log('Start here')

 