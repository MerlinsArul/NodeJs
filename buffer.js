const buffer = new Buffer.from("NodeJS");
buffer.write("AngularProgramming")
console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());


//compare

var buffer1 = new Buffer.from('ABC');
var buffer2 = new Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);

}

// Different Method to create Buffer
var buffer1 = Buffer.alloc(100);
var buffer2 = Buffer.from('GFG');
var buffer3 = Buffer.from([1, 2, 3, 4]);

// Writing data to Buffer
buffer1.write("Angular");

// Reading data from Buffer
var a = buffer1.toString('utf-8');
console.log(a);

// Check object is buffer or not
console.log(Buffer.isBuffer(buffer1));

// Check length of Buffer
console.log(buffer1.length);

// Copy buffer
var bufferSrc = Buffer.from('ABC');
var bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);

var Data = bufferDest.toString('utf-8');
console.log(Data);

// Slicing data
var bufferOld = Buffer.from('AngularPrograming');
var bufferNew = bufferOld.slice(0, 4);
console.log(bufferNew.toString());

// concatenate two buffer
var bufferOne =  Buffer.from('Angular Frontend ');
var bufferTwo =  Buffer.from('With Angular.io');
var bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());
