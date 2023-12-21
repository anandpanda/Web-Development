const fs = require("fs");

fs.writeFile("hello.txt", "Hello from Node.js", function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("File created");
  }
});

fs.readFile("hello.txt", "utf8", function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});