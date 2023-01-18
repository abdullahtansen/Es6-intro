// break up with var
// no more use of var
// let: let it to reassign
// const: do not allow to reassign

let money = 25;
money= 35;
console.log(money);
const bird = 'Jaan Pakhi';
// bird = 'Moyna Pakhi';
const message = bird + ' Potas Potas';
console.log(message);

const numbers = [12,89,65,45];
// reassign is not allowed
// numbers = [77,66,55,22,99];
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'Mofiz',
    address:'Rongpur' 
}
student.name = 'Tansen';
console.log(student);

for(let i = 0; i < numbers.length; i++){
    const number = [i];
    console.log(number);
}