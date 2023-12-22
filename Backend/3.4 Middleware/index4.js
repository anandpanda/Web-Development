import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));

let bandName = "";

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"]+req.body["pet"]+'✌';
  next();
}
app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res) => {
  res.send(`<h1> Your Band name is : </h1> <h2> ${bandName} </h2>`);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
