const path = require("path");

console.log("Current file info : \n");
console.log("File :", __filename);
console.log("directory :", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/foysal/documents/nextLevel.pdf";
console.log("Analyzing path: ", filePath, "\n");
console.log("Directory: ", path.dirname(filePath));
console.log("Base Name: ", path.basename(filePath));
console.log("File Extension: ", path.extname(filePath));
console.log("File Name: ", path.basename(filePath, path.extname(filePath)));

console.log("\n" + "-".repeat(50) + "\n");

const parse = path.parse(filePath);
console.log("parsed path object: ", parse);

console.log("\n" + "-".repeat(50) + "\n");

console.log("Formatted path: ", path.format(parse));
