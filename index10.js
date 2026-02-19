const users = [
    {name: "Taro", age: 18},
    {name: "Hanako", age: 22},
    {name: "Ken", age: 30},
    {name: "Yuki", age: 15},
];
const result = users
.filter(user=> user.age >= 20)
.map(user => user.name)
console.log(result);

