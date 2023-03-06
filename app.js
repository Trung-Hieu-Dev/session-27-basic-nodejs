//nodejs version 12
const fs = require('fs');

//create & write file
fs.writeFile('user-data.txt', 'username=Max', err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Wrote to file!');
    }
});