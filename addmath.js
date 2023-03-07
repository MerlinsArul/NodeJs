 require('./add.js');

 console.log("This is example for local module");


 //module.export or reusable code

 const sub = require('./add.js');
 const diff = sub(7,2);
 const diff1 = sub(9,3)
 console.log(diff);
 console.log(diff1);
 console.log('This is example for module.export');


// module.export with multiple methods
const math = require('./math');

const {div,mul}=math; // destructuring

console.log(div(5,2));
console.log(mul(5,2));


 //Module caching


 const stud1 = require('./student');
 console.log(stud1.getName());
 stud1.setName('Merlins');
 console.log(stud1.getName());
  const stud2 = require('./student');
 console.log(stud2.getName());