const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "this is a temp file");
console.log("file created");

if (fs.existsSync("./output/temp.txt")) {
  console.log("file exist");

  fs.unlinkSync("./output/temp.txt");
  console.log("file deleted");
}

try {
  fs.unlinkSync("./output/temp.txt");
} catch (error) {
  console.error("ERRoR", error.message);
}

fs.writeFile("./output/temp2.txt", "Another temp file", (error) => {
  if (error) return console.log("Error", error.message);
  console.log("Another temp file created");

  fs.unlink("./output/temp2.txt", (error) => {
    if (error) {
      console.error("error", error.message);
    } else {
      console.log("Temp 2 file deleted");
    }
  });
});
