const cal = require('./cal');
const func = require('./func')

console.log(cal.add(5,3));
console.log(cal.sub(5,3));
console.log(cal.mul(5,3));
console.log(cal.div(5,3));

// console.log(func())
for (let i=0;i <10; i++){
    console.log(func());
}