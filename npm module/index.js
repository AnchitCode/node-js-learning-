const {format} = require('date-fns');
const {v4: uuid} =  require('uuid');

console.log(format(new Date(), 'yyyy-MM-dd HH:mm:ss')); 

console.log("Your unique id is: " + uuid());

console.log("Hello Anchit You are fukin frekin awesome!");

console.log();