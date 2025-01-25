import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    var day = new Date("june 24, 2023 11:13:00").getDay();
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
})
app.listen(port, () => {
    console.log(`listening at ${port}.`);
});