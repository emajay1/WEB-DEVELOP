const fs = require("fs");

fs.writeFile('message.txt', 'hello emmy', (err) => {
    if (err) throw err;
    console.log("the file has been created");
});

fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});