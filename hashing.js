const crypto = require("crypto");

console.log("\n MD5 Hash");

const md5Hash = crypto.createHash("md5").update("password123").digest("hex"); //md5 hashing is not recomended
const md5Hash2 = crypto.createHash("md5").update("password123").digest("hex"); //this will make same hash like preivious one

console.log("input: password123");
console.log("MD5 HashedPassword: ", md5Hash);
console.log("MD5 Hashed2 : ", md5Hash2);

console.log("-".repeat(50));

const sha256Hash = crypto.createHash("sha256").update("password").digest("hex");
console.log("input: password123");
console.log("sha256 HashedPassword: ", sha256Hash);

console.log("-".repeat(50));

const sha512Hash = crypto.createHash("sha512").update("password").digest("hex");
console.log("input: password123");
console.log("sha512 HashedPassword: ", sha512Hash);
