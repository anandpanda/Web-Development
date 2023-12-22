import express from "express";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();
let dayType = (day%6 == 0)? "the weekend" : "a weekday";
let advice = (day%6 == 0)? "relax" : "work hard";

app.get("/", (req, res) => {
    res.render("index.ejs", {dayType: dayType, advice: advice});
})

app.listen(port, () => {
    console.log(`Server Running at ${port}.`);
});