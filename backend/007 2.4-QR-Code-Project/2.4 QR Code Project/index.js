import inquirer from 'inquirer';
import qr from 'qr-image';
import { createWriteStream, writeFile} from 'fs';

inquirer 
.prompt([
    {
        type: "input",
        name: "link",
        message: "type in the url, now"
    }
])
.then((answers) => {
    const urlLink = answers.link;
    console.log(urlLink);
    const genImage = qr.image(urlLink);
    genImage.pipe(createWriteStream('mysubb.png'));
    writeFile('mysubb.txt', urlLink, 'utf8', (err) => {
        if (err) throw err;
        console.log('the file has been saved');
    })
})
.catch((error) => {
    if (error.isTtyError) {
        console.log("prompt could not be render");
    } else {
        console.log("what is wrong");
    }
});