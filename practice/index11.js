const products = [
    {name: "PC", price: 120000},
    {name: "Mouse", price: 5000},
    {name: "Keyboard", price: 8000},
    {name: "Monitor", price: 40000},
];
const result = products
.filter(arr => arr.price >= 10000)
.map(arr => arr.price * 0.9)
.reduce((sum,arr) => sum+arr,0);
console.log(result);