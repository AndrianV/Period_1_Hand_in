const fs = require('fs');

// SYNCHRONOUS
//### in 2 lines ###
// const text = fs.readFileSync(process.argv[2]).toString();
// const removedNewLines = text.split("\n");
// console.log(removedNewLines.length-1);

//### one-liner ###
// const linesCountInFile = fs.readFileSync(process.argv[2]).toString().split("\n").length-1;
// console.log(linesCountInFile);

//===========================
// ASYNCHRONOUS
const text = fs.readFile(process.argv[2], 'utf8', (err, content) => {
    if (err) { throw err; }
    const linesCountInFile = content.toString().split("\n").length-1;
    console.log(linesCountInFile);
})
