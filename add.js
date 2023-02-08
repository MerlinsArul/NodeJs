const add = (a,b)=>{
    return a+b;
};
const sum = add(8,9);
console.log(sum);

// module.export
const sub =(a,b)=>{
    return a-b;
};
module.exports = sub;