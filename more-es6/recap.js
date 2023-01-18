// var let const
// break up with var
const numbers = [12,546,45,98];
let salary = 450;
salary = 455;

// default parameters
function calculateSalary(salary,tax = 0.25,bonus = 0){
    const remaining = salary - salary * tax;
    const  total = remaining + bonus;
    return total;
}

// template string 
const element = `
    <div>
        <h3>Name: </h3>
        <p>Address: </p>
        <p>Salary: ${calculateSalary(1000,0,0)} </p>
        <p>Others: ${numbers[2]}</p>
    </div>
`;
console.log(element);

// Arrow Function 
const doubleIt = x => x * 2;

const calculateSalary2 = (salary,tax,bonus) => salary - salary * tax + bonus;

// spread operators 
const ages = [11,13,15,14,10,16];
const newAges = [...ages,22,85,150];
newAges.push(45);
console.log(newAges);