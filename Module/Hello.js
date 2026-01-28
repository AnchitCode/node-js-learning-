console.log("Hello Genious");

const os = require("os");//----importing built in module
const path = require("path");//built in module
// console.log(os.version());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

const math = require("./math");//---importing custom module
console.log(math.add(2,3));

const{add,subtract,multiply,divide} = require("./math");
console.log(add(3,5));
console.log(subtract(5,3));
console.log(multiply(3,5));
console.log(divide(3,5));