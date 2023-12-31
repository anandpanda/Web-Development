//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const port = 3000;
const app = express();
let auth = false;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPass(req, res, next){
    if(req.body.password === "ILoveProgramming"){
        auth = true;
    }
    next();
}
app.use(checkPass);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', (req, res) => {
    let place = "";
    if(auth) place = "secret.html";
    else place = "index.html";
    res.sendFile(__dirname + `/public/${place}`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  