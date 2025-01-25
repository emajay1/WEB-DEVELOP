import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    var day = new Date().getDay();
    var week = "weekday";
    var advice = "work hard at work bro";
    if ((day === 0) || (day === 6)) {
        week = "weekend";
        advice = "have some fun";
    }
    res.render("index.ejs", 
    {
        wek: week,
        advic: advice,
    });
});
  

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});