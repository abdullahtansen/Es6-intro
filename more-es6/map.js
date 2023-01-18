const numbers = [2,8,6,4,3];
const output = [];
for(const number of numbers){
    const doubled = number * 2;
    output.push(doubled);
}
console.log(output);


function getDoubles(numbers){
    const output = [];
    for(const number of numbers){
        const double = doubleIt(number);
        output.push(double);
    }
    return output;
}

const doubleIt = number =>  number * 3;

const makeDoubled = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(number => number * 2);
console.log(makeDoubleDirect);
console.log(makeDoubled);

/* 
purpose: 
1: get an array
2:for every elements of the array do something
3:store the result in an array
4:return the result array
*/

const outputs = getDoubles(numbers);
console.log(outputs);