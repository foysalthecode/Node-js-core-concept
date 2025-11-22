const fs = require("fs");

console.log("Start reading");

try {
  const data = fs.readFileSync("./data/dairy.txt", "utf-8");
  console.log("file content :");
  console.log(data);
} catch (err) {
  console.error(err);
}

console.log("finished");