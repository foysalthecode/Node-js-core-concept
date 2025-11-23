const os = require("os");

console.log("System info \n");
console.log("-".repeat(50), "\n");

console.log("platform details: ");
console.log("Platform: ", os.platform());
console.log("Achitecture: ", os.arch());
console.log("OS type: ", os.type());
console.log("OS Release: ", os.release());
console.log("Host name: ", os.hostname());

console.log("\n CPU info: ");
const cpus = os.cpus();
console.log("CPU Model: ", cpus[0].model);
console.log("Number of Cores: ", cpus.length);
console.log("CPU Speed: ", cpus[0].speed);

console.log("-".repeat(50));

const totalMem = os.totalmem();
const freeMem = os.freemem();
console.log("Total Memory: ", (totalMem / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("Free Memory: ", (freeMem / 1024 / 1024 / 1024).toFixed(2), "GB");

console.log("-".repeat(50));



