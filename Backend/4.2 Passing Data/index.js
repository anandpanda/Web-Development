import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let data = {text: "Enter your name below 👇"};

app.get("/", (req, res) => {
  // res.render("index.ejs");
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  let len = req.body.fName.length + req.body.lName.length;
  // res.render("index.ejs", {length: len});
  data = {text: `Your name has ${len} letters.`};
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
