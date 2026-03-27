const number = [1,2,3,4,5,6,7,8];
const result = number
.filter(n => n % 2 === 0)
.map(n => n * 5);
console.log(result);