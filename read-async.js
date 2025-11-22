const fs = require("fs");
console.log("Start Reading....");

fs.readFile("./data/dairy.txt", "utf-8", (error, data) => {
  if (error) {
    console.error("Error Happen", error.message);
  }
  console.log("File content :");
  console.log(data);
});

console.log("runs immedietly - no blocking");
