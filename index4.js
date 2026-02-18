const prices = [120,80,300,150,500];
const result = prices
.filter(n => n >= 200)
.map(n => n * 0.9);
console.log(result);