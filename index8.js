const numbers = [10,25,35,45,55];
const result = numbers
.filter(n => n >= 30)
.reduce((sum,n) => sum + n,0);
console.log(result);
