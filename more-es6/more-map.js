const numbers = [12,56,87,44];
const half = numbers.map(number => number / 2);
console.log(half);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const friendsLetter = friends.map(friend => friend[0]);
// console.log(friendsLetter);
const nameLength = friends.map(friend => friend.length );
// console.log(nameLength);

const products = [
    {id: 1, name: 'laptop', price: 4500},
    {id: 2, name: 'mobile', price: 4000},
    {id: 3, name: 'watch', price: 3500},
    {id: 4, name: 'tablet', price: 4600},
];
const items = products.map(product => product.name);
console.log(items);