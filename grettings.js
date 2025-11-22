const args = process.argv;

/**
 * process.arg[0] = node path
 * process.arg[1] = file path
 * process.arg[2] = first actual argument
 */

const name = args[2] || "guest";
const time = new Date().getHours();

let grettings;

if (time < 12) {
  grettings = "Good morning";
} else if (time < 18) {
  grettings = "Good afternoon";
} else {
  grettings = "Good evening";
}

console.log(`${grettings} ${name}`);
