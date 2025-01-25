import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        const result = response.data;
        res.render("index.ejs", {
            secret: result.secret,
            user: result.username,
        });
    } catch (error) {
        console.erroe(error.response ? error.response.data : error.message);
    }
});

app.listen(port, () => {
    console.log(`listening at port ${port}`);
});