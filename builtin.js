//path module

const path = require("node:path"); // we may use node or maynot

console.log(__filename);
console.log(__dirname);


// name of the directory and file
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// extension of the file
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

// properties if the file
console.log(path.parse(__filename));

// return whether path is absolute or not
console.log(path.isAbsolute(__filename));

// join the path of the program
console.log(path.join("folder1","folder2","index.html"));
console.log(path.join("folder1","folder2","../index.html"));
console.log(path.join(__dirname,"data.json"));

// seq of path into absolute path
console.log(path.resolve("folder1","folder2","index.html"));
console.log(path.resolve("/folder1","folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","../index.html"));
console.log(path.resolve(__dirname,"data.json"));





