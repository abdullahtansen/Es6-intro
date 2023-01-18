const fish = {
    name: 'king Hilsa',
    address: 'Chandpur',
    color : 'Silver',
    phone : '01855588475',
    price : 4000
}
console.log(fish.phone)
const {name,address,color} = fish;
console.log(name,address,color);

// Array destructuring
const [first,another] = [44,99]
console.log(another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost,notun] = nayoks;
console.log(lost);

function getNames(){
    return ['ALim','Halim'];
}

const [baba,chacha] = getNames();
console.log(chacha,baba);

