const fs = require('fs');
const { exitCode } = require('process');

console.log('Start');

process.nextTick(()=>{
    console.log(`First next-tick callback executed`);
});

Promise.resolve('resolved').then((result)=>{
    console.log(`First promise was ${result}`);
})

fs.readFile('text.txt',(error)=>{
    setTimeout(()=>{
        console.log('TimeOut callback executed');
    },0);

setImmediate(()=>{
    console.log('Immediate callback executed');
})
    if(!error){
        console.log('File read');
    }

    Promise.resolve('resolved').then((result)=>{
        console.log(`Second promise was ${result}`);
    });

    process.nextTick(()=>{
        console.log(`Second next-tick called executed`);
    });
})

Promise.resolve('resolved').then((result)=>{
    console.log(`Third promise was ${result}`);
});

process.nextTick(()=>{
    console.log(`Third next-tick called executed`);
})

console.log('End');

process.on('exit',(exitCode)=>{
    console.log(`Process exited wih code ${exitCode}`);
})


