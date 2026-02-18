const scores = [40,55,70,30,90,100];
const result = scores
.filter(n => n >= 60)
.map(n => n + 5);
console.log(result);