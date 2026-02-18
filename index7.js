const numbers = [5,10,15,20];
const sum = numbers.reduce((total,n)=>total+n,0);
const result = sum /numbers.length;
console.log(result);