// console.log("hello From Node !");

// const fs = require("fs");

// fs.writeFile("message.txt", "Hello from NodeJS!", (err) =>{
//   if (err) throw err;
//   console.log("The file has been saved");
// });

// fs.readFile("./message.txt", "utf8", (err, data) =>{
//   if (err) throw err;
//   console.log(data);
// });

// var generateName = require('sillyname');

// import generateName from "sillyname";
// var sillyName = generateName();

// console.log(`My name is ${sillyName}.`);

// import superheroes from "superheroes";

// const name = superheroes.random();

// console.log(`I am ${name}.`);


/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered Url into a 
    QR code image.
3. Create a text file to save the user input using the native fs
    node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";

import fs, { writeFile } from "fs";

inquirer
  .prompt([
    {
      "message": "Type in your URL:",
      "name": "URL",
    }
  ])
  .then((answers) => {
    // console.log(answers)
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));

    fs.writeFile("URL.txt", url, (err) =>{
        if (err) throw err;
        console.log("The file has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });