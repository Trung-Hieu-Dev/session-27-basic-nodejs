//nodejs version 12
const fs = require('fs');

//read file
fs.readFile('user-data.txt', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
})

//create & write file
fs.writeFile('user-data.txt', 'username=Max', err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Wrote to file!');
    }
});