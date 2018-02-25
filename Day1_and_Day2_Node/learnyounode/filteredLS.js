const fs = require('fs');
const dir = process.argv[2];
const filterExtension = process.argv[3];


fs.readdir(dir, 'utf8', (err, files) => {
    let filtered = files.filter( file => {
        let extension = file.split(".").pop();
        return extension === filterExtension;
    });
    // console.log("Filtered : ", filtered);    
    filtered.forEach( file => {
        console.log(file);
    })
})