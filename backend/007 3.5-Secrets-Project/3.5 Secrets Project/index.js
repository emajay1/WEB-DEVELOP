import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));


//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
const app = express();
const port = 3000;
var success = "";

app.use(bodyParser.urlencoded({ extended: true }));

function passw(req, res, next) {
    if ("ILoveProgramming" === req.body.password) {
        success = __dirname + "/public/secret.html";
    }
    else {
        success = __dirname + "/public/index.html";
    }
    next();
}

app.use(passw);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    res.sendFile(success);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
